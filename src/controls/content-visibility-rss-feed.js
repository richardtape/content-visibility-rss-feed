/**
 * Load WordPress dependencies.
 *
 * Fill           is used as add-ons register their components into a slot provided by the core Content
 *                Visibility Plugin.
 * 
 * Disabled       allows the add-ons controls to be uncontrollable by the user until the prerequisites
 *                have been set. Prereqs are to enable Content Visibility Rules and to choose shown or
 *                hidden.
 * 
 * __             is the way to internationalize text.
 * 
 * registerPlugin is used to integrate this add-on with cContent Visibility
 * addFilter      registers the key for our data
 */ 
import { Fill, Disabled } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { registerPlugin } from '@wordpress/plugins';
import { addFilter } from '@wordpress/hooks';

/**
 * Load this add-on's dependencies.
 *
 * PanelBody       is how all content visibility add-ons are added.
 * PanelRow        fits within PanelBody - is a place to put controls.
 * CheckboxControl is the block editor provided Checkbox input.
 */
import { PanelBody, PanelRow } from '@wordpress/components';
import { CheckboxControl } from '@wordpress/components';
import hasRules from '../helpers/has-rules';

/*
* For brevity, this add-ons controls are in this file, but it may be more ideal to load them
* in a separate file and import`ing them here.
*/
function ContentVisibilityRSSFeedPanelBodyControl( { props } ) {

    // Fetch the data from PHP
    const phpData = BlockVisibilityRSSFeed;

    // You may want to check your data is sent from PHP to JS correctly.
    // console.log( phpData );

    // What data has been persisted in the db?
    let persistedData = props.attributes.contentVisibilityRules;

    // This variable is merely an example. It is used to store data.
    let dataKey = 'rss';

    // If we have persisted data, and it is set to "1" then the checkbox should be checked
    // otherwise we fall back to whatever isChecked is which will change when someone alters the value of the checkbox
    let thisChecked = persistedData.hasOwnProperty( 'rssFeed' ) && persistedData.rssFeed.hasOwnProperty( dataKey ) && '1' === props.attributes.contentVisibilityRules.rssFeed[ dataKey ];

    let hasRulesClass = ( hasRules( props, 'rssFeed' ) ) ? ' has-active-rules' : '';

    /**
     * As it stands, this checkbox will add data to the database such as this, if the content visibility rules
     * are added to a paragraph block (truncated a little for brevity)
     * 
     *
     <!-- wp:paragraph {"contentVisibility":"shown","contentVisibilityRules":{"contentVisibilityRulesEnabled":true,"rssFeed":{"yourDataKey":"1"}}} -->
        <p contentvisibility="shown">This paragraph has the addon starter checkbox checked.</p>
     <!-- /wp:paragraph -->
     */
    return (
        <PanelBody
            title={ __( 'RSS Feed', 'content-visibility-rss-feed' ) }
            initialOpen={ false }
            className={"content-visibility-control-panel content-visibility-rss-feed-controls" + hasRulesClass}
        >
            <PanelRow>
                <CheckboxControl
                    label='RSS Feed'
                    checked={ thisChecked }
                    onChange={ ( isChecked ) => {
                        props.setAttributes( {
                            contentVisibilityRules: {
                                ...props.attributes.contentVisibilityRules,
                                rssFeed: {
                                    ...props.attributes.contentVisibilityRules.rssFeed,
                                    [dataKey]: isChecked ? '1' : '0'
                                }
                            },
                        } );
                    }}
                />

                { props.attributes.contentVisibility && (
                    <p className="rss-feed-help-intro content-visibility-help-text">{ __( 'Checking this box means that for those using RSS Feed readers this block will be ' + props.attributes.contentVisibility + '.', 'content-visibility-rss-feed' ) }</p>
                ) }
            </PanelRow>

        </PanelBody>
    );

}//end ContentVisibilityRSSFeedPanelBodyControl()


/**
 * The component that is exported and loaded and what is displayed to the user.
 * This should be a PanelBodyControl component which contains your controls.
 * @param {object} data The block data 
 */
export function ContentVisibilityRSSFeedControl( data ) {

    let { props } = { ...data };

    // Does this block have rules enabled and have we selected shown or hidden?
    let rulesEnabled      = props.attributes.contentVisibilityRules.contentVisibilityRulesEnabled;
    let contentVisibility = props.attributes.hasOwnProperty( 'contentVisibility' );

    // Both need to be set, if not, the controls for this add-on should be disabled.
    // This is done by wrapping our controls in a <Disabled> component.
    if ( ! rulesEnabled || ! contentVisibility ) {
        return (
            <Disabled><ContentVisibilityRSSFeedPanelBodyControl props={ props } /></Disabled>
        );
    }

    // This block has rules enabled and the user has selected 'shown' or 'hidden'. Load our controls.
    return (
        <ContentVisibilityRSSFeedPanelBodyControl props={ props } />
    );

}//end ContentVisibilityRSSFeedControl()

/**
 * Render the <ContentVisibilityRSSFeedControl> component by adding
 * it to the block-visibility-extra-controls Fill.
 *
 * @return {Object} A Fill component wrapping the ContentVisibilityRSSFeedControl component.
 */
function ContentVisibilityRSSFeedFill() {

    // Do not change the name attribute of this Fill. It is the name provided by the Content Visibility plugin.
    return (
        <Fill name="content-visibility-extra-controls">
            {
                ( fillProps ) => {
                    return (
                        <ContentVisibilityRSSFeedControl props={ fillProps } />
                    )
                }
            }
        </Fill>
    );

}//end ContentVisibilityRSSFeedFill()

// Add our component to the Slot provided by BlockVisibilityControls
// The integer is an attempt to control the order of display of add-ons in the block sidebar. Higher = lower.
registerPlugin( 'content-visibility-6-rss-feed-fill', { render: ContentVisibilityRSSFeedFill } );


// Register our visibility rule with the main plugin
addFilter( 'contentVisibility.defaultContentVisibilityRules', 'content-visibility-rss-feed/block-visibility-rules', registerContentVisibilityRule );

/**
 * Register our data key so that controls for this add-on have a place to store their data.
 * @param {*} defaultRules 
 */
function registerContentVisibilityRule( defaultRules ) {

    defaultRules.rssFeed = {};

    return defaultRules;

}//end registerContentVisibilityRule()
