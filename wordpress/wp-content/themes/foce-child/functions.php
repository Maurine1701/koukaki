<?php

function add_enqueue_scripts() {
    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
    wp_enqueue_style( 'child-style', get_stylesheet_uri(), array(), filemtime( get_stylesheet_directory() . '/style.css' ) );
    wp_enqueue_script( 'child-script', get_stylesheet_directory_uri() . '/js/index.js', array( 'jquery' ), '1.1', true );
}
add_action( 'wp_enqueue_scripts', 'add_enqueue_scripts' );



//chargement simpleParallax

function enqueue_simpleparallax() {
    wp_enqueue_script('simple-parallax', 'https://cdnjs.cloudflare.com/ajax/libs/simple-parallax-js/5.6.2/simpleParallax.min.js', array(), '5.6.2', true);
  }
  add_action('wp_enqueue_scripts', 'enqueue_simpleparallax');
  

// Get customizer options form parent theme
if ( get_stylesheet() !== get_template() ) {
    add_filter( 'pre_update_option_theme_mods_' . get_stylesheet(), function ( $value, $old_value ) {
        update_option( 'theme_mods_' . get_template(), $value );
        return $old_value; // prevent update to child theme mods
    }, 10, 2 );
    add_filter( 'pre_option_theme_mods_' . get_stylesheet(), function ( $default ) {
        return get_option( 'theme_mods_' . get_template(), $default );
    } );
}




