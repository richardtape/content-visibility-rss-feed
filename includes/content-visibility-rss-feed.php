<?php
/**
 * Main loader file for Content Visibility RSS Feed.
 *
 * @package ContentVisibilityRSSFeed
 */

namespace RichardTape\ContentVisibilityRSSFeed;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Use the content_visibility_enqueue_editor_assets action to load our assets so we know we're loading when and where we should be.
add_action( 'content_visibility_enqueue_editor_assets', __NAMESPACE__ . '\\enqueue_editor_assets', 30 );

/**
 * Enqueue script and style assets used in the editor.
 *
 * @since 1.0.0
 */
function enqueue_editor_assets() { // phpcs:ignore

	$prereqs = array(
		'wp-blocks',
		'wp-i18n',
		'wp-element',
		'wp-plugins',
		'wp-dom-ready',
	);

	// The 5.8 widgets screen requires a special editor?! Feelsbadman.
	$CVEditor = new \RichardTape\ContentVisibility\Editor();
	if ( $CVEditor->on_widgets_screen() ) {
		$prereqs[] = 'wp-edit-widgets';
	} else {
		$prereqs[] = 'wp-editor';
	}

	// Register and then load our dashboard javascript.
	wp_register_script(
		'content-visibility-rss-feed',
		plugins_url( '/build/index.js', dirname( __FILE__ ) ),
		$prereqs,
		filemtime( plugin_dir_path( __DIR__ ) . 'build/index.js' ),
		true
	);

	// This data will be available, in your JavaScript, as the BlockVisibilityRSSFeed variable.
	$block_visibility_rss_feed_args = array();

	wp_localize_script( 'content-visibility-rss-feed', 'BlockVisibilityRSSFeed', $block_visibility_rss_feed_args );

	wp_enqueue_script( 'content-visibility-rss-feed' );

	// Load block editor styles for this plugin. this file is built from /src/styles/editor.css .
	wp_enqueue_style(
		'content-visibility-rss-feed-panel',
		plugins_url( 'build/index.css', dirname( __FILE__ ) ),
		array(),
		filemtime( plugin_dir_path( __DIR__ ) . 'build/index.css' ),
		'all'
	);

}//end enqueue_editor_assets()

// Register this add-on so that the rule logic system knows what to do when it comes across logic set by this addon's block editor controls.
add_filter( 'content_visibility_rule_types_and_callbacks', __NAMESPACE__ . '\\add_rule_type_and_callback' );

/**
 * Register our rule type to enable us to provide the logic callback.
 *
 * @param array $default_rule_types_and_callbacks Existing rules and callbacks.
 * @return array modified rule types and callbacks with ours added.
 */
function add_rule_type_and_callback( $default_rule_types_and_callbacks ) {

	$default_rule_types_and_callbacks['rssFeed'] = __NAMESPACE__ . '\rule_logic_rss_feed';

	return $default_rule_types_and_callbacks;

}//end add_rule_type_and_callback()

/**
 * This is the callback function that Content Visibility will call when a block has rules generated
 * by this plugin.
 *
 * @param array  $rule_value The specific rules for this add-on for the specific block being parsed.
 * @param string $block_visibility Whether the block should be shown or hidden if the rule is true.
 * @param array  $block The full block.
 * @return bool  false if the block is to be removed. true if the block is to be potentially kept.
 */
function rule_logic_rss_feed( $rule_value, $block_visibility, $block ) {

	// Make sure we're not touching this block if this block doesn't have rules. keep this block to let others decide.
	if ( ! is_array( $rule_value ) || empty( $rule_value ) ) {
		return true;
	}

	// Check we have relevant data to check. We add rss in src/controls/content-visibility-rss-feed.js.
	if ( ! isset( $rule_value['rss'] ) || empty( $rule_value['rss'] ) ) {
		return true;
	}

	/*
	* Some sort of logic here based on what rules are set for this block.
	* You can return true early here if you discover this block doesn't need to be tested.
	* Returning true at any point will put this block back into the rules system so that other
	* add-ons can determine whether this block should be removed or not.
	*/

	// Our example is basically a boolean. The block will be SHOWN or HIDDEN as selected by the
	// 'shown' or 'hidden' control when this example checkbox is checked. i.e. if 'shown' is selected
	// and the checkbox is checked (and no other rules are in place) then this block will be shown.
	// If 'hidden' is selected, and the checkbox is checked, then this block will be hidden.
	$checkbox_is_checked = ( 1 === absint( $rule_value['rss'] ) ) ? true : false;

	// Checkbox not checked? Bail.
	if ( false === $checkbox_is_checked ) {
		return true;
	}

	$currently_on_rss_feed = is_feed();

	/*
	* This is the end game for add-ons. Determine here whether to hide this block, or keep it
	* for other add-ons to determine whether it should be removed or not.
	*
	* $block_visibility will either be the string 'shown' or 'hidden' and is what the user sets
	* when they first enable content visibility rule for the block.
	*
	* Returning true will put this block back into the content visibility logic flow to allow
	* other add-ons to determine whether this block should be shown or hidden.
	* Returning false will remove this block from being displayed. Generally-speaking the return
	* for each case (shown or hidden) will be the direct opposite.
	*/
	switch ( $block_visibility ) {
		case 'shown':
			return $currently_on_rss_feed;

		case 'hidden':
			return ! $currently_on_rss_feed;
	}

}//end rule_logic_rss_feed()
