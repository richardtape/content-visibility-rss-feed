<?php
/**
 * Content Visibility RSS Feed
 *
 * @package     ContentVisibilityRSSFeed
 * @author      Richard Tape
 * @copyright   2021 Richard Tape
 * @license     GPL-2.0+
 *
 * @wordpress-plugin
 * Plugin Name: Content Visibility RSS Feed
 * Plugin URI:  https://richardtape.com/content-visibility/
 * Description: [Content Visibility Add-On] Show or hide your content for those folks consuming your content with RSS.
 * Version:     0.1.3
 * Author:      Richard Tape
 * Author URI:  https://richardtape.com
 * Text Domain: content-visibility-rss-feed
 * License:     GPL-2.0+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

require_once plugin_dir_path( __FILE__ ) . 'includes/content-visibility-rss-feed.php';
