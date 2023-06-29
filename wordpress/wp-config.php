<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'koukaki' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'fe3*8^DcK;GD:YN#Q3Ih``=~)0A^DcV_P(psg|^2LO 7qK3zx-2gb@!6$>NjPz*p' );
define( 'SECURE_AUTH_KEY',  '%SoU!8niAg*h(0X/CPK:-NVJYr S9:IA/C(_8@.45]j[zl-$hl@8p`z0*IB8@+`/' );
define( 'LOGGED_IN_KEY',    'pp*f,g2Dz!L_ixkNP{87+*cd&ApibOf^t3:`N9.fxSG[Tq>Nw]#=CR;x?Jt!oxSh' );
define( 'NONCE_KEY',        'sizL6#lD(5y73H>JH@8`<Wg}Ptm2]&:=`uG,bVVQ(l/zK+9h!(w0%m.j]p)ZxHaW' );
define( 'AUTH_SALT',        'oZ=t?-`vlz|c!PYP*X]f)k$V%Dt_z>@(/S`fQ~KO`W6fm}cibD:;WH2Ajv@Lxa:)' );
define( 'SECURE_AUTH_SALT', 'O8O*|Jt?E[iRi#&RcM{Y)8<2l=0hkXp%brOe?K#&2{1VH|Vl=iyH@hoLaji14I=d' );
define( 'LOGGED_IN_SALT',   '(aRxob?%q##B}-Xe6mg:O(w85+}Rc|]RlJQhu@+foKh51NH^B[+?*ec-7Y|}q,yQ' );
define( 'NONCE_SALT',       '%A5IBED3npTtJYPcQ0[tNbQ~-3VYZtccCT5eNGIuMpb-Z4!`H]W/cIK3LtV<gU5I' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
