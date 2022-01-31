jQuery(document).ready(function() {
	
	// Get the form.
	var aform = jQuery('#ajax-contact');

	// Get the messages div.
	var formMessages = jQuery('#form-messages');

	// Set up an event listener for the contact form.
	
	jQuery(aform).submit(function(){
    jQuery.ajax({
       type:'POST',
       url: 'mailer.php',
       data:formMessages,
       success: function(response)
       {
       // console.log(response);
	   $('#ajax-contact').trigger('reset');
       }
    });
    return false;
});


	/*jQuery(axform).submit(function(e) {
		// Stop the browser from submitting the form.
		e.preventDefault();

		// Serialize the form data.
		var formData = jQuery(aform).serialize();

		// Submit the form using AJAX.
		jQuery.ajax({
			
			type: 'POST',
			url: jQuery(aform).attr('action'),
			data: formData,
			success: function(data) {

         
// Make sure that the formMessages div has the 'success' class.
			jQuery(formMessages).removeClass('error');
			jQuery(formMessages).addClass('success');

			// Set the message text.
			jQuery(formMessages).text(response);

			// Clear the form.
			jQuery('#name').val('');
			jQuery('#email').val('');
			jQuery('#message').val('');
                    },

                    error : function() {

                       // Make sure that the formMessages div has the 'error' class.
			jQuery(formMessages).removeClass('success');
			jQuery(formMessages).addClass('error');

			// Set the message text.
			if (data.responseText !== '') {
				jQuery(formMessages).text(data.responseText);
			} else {
				jQuery(formMessages).text('Oops! An error occured and your message could not be sent.');
			}

                    }
			
		});

	}); */
	
	});
	
	