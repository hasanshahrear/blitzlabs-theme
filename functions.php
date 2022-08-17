<?php
/**
 * BLITZLABS Theme functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package BLITZLABS
 * @since 1.0.0
 */

/**
 * Define Constants
 */
define( 'CHILD_THEME_BLITZLABS_VERSION', '1.0.0' );

/**
 * Enqueue scripts
 */
function child_enqueue_scripts() {

	wp_enqueue_style( 'font-awesome-blitzlabs-css', '//cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css', array('astra-theme-css'), CHILD_THEME_BLITZLABS_VERSION, 'all' );
	wp_enqueue_style( 'blitzlabs-css', get_theme_file_uri() . '/assets/css/css.css', array('astra-theme-css'), CHILD_THEME_BLITZLABS_VERSION, 'all' );
	wp_enqueue_style( 'blitzlabs-theme-css', get_theme_file_uri() . '/style.css', array('astra-theme-css'), CHILD_THEME_BLITZLABS_VERSION, 'all' );

	wp_enqueue_script('blitzlabs-dat-gui', get_theme_file_uri()."/assets/js/dat.gui.min.js", array('jquery'), "", true);
	wp_enqueue_script('blitzlabs-script', get_theme_file_uri()."/assets/js/script.js", array('jquery', 'blitzlabs-dat-gui'), "", true);
	wp_enqueue_script('blitzlabs-custom-script', get_theme_file_uri()."/assets/js/custom-script.js", array('jquery'), "", true);
}

add_action( 'wp_enqueue_scripts', 'child_enqueue_scripts', 15 );
