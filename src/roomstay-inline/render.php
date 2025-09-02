<?php
	if( isset( $attributes['locationId'] ) && !empty( $attributes['locationId'] ) ) {
		$location_id = $attributes['locationId'];

		print "<div class=\"wp-block-roomstay-index\">";
			print "<script src=\"https://clients.app.roomstay.io/clients/Heyscape/$location_id/inline.bundle.js\"></script>";
			print "<div id=\"roomstay-booking-container\"></div>";
		print "</div>";
	}