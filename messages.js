var messages = [
 {
 "user": {
 "name": "Kat",
 "image": "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=25"
 },
 "message": {
 "text": "I'm changing the due date on the landing page because I need more time. The designs look great!",
 "date": 1534885670000
 }
 },
 {
 "user": {
 "name": "Ron",
 "image": "https://images.pexels.com/photos/1498335/pexels-photo-1498335.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=25"
 },
 "message": {
 "text": "I'm changing the due date on the landing page because I need more time. The designs look great!",
 "date": 1534485670000
 }
},
 {
 "user": {
 "name": "Benny",
 "image": "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=25"
 },
 "message": {
 "text": "It is great to finally see this project complete",
 "date": 1534785670000
 }
 },
 {
	 "user": {
	 "name": "Betty",
	 "image": "https://images.pexels.com/photos/1498778/pexels-photo-1498778.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=25"
	 },
	 "message": {
	 "text": "Next time I will be able to see things better",
	 "date": 1537564070000
	 }
 }
]

			function createArticle( $message ) {
				let $article = $("<article>").addClass( "message-row");
				let $image = $("<img>").attr( "src" , $message.user.image );
				let $message_image = $("<div>").addClass( "message-image").append( $image );

				let $message_author = $("<span>").addClass( "message-author").text( $message.user.name );

				let $dateMessage = new Date( Number.parseInt( $message.message.date ) );
				let $dateTimeOnly = $dateMessage.toLocaleTimeString( );
				let $dateDateOnly = $dateMessage.toLocaleDateString( );

				let $timePieces = $dateTimeOnly.replace( / /gi , ":" ).split( ":"); 
				let $message_time = $("<span>").addClass( "message-time").text( $timePieces[ 0 ] + ":" + $timePieces[ 1 ] + " " +  $timePieces [ 3 ] + " " + $dateDateOnly);
				console.log( "message-2" , $message );
				let $message_text = $("<span>").addClass( "message-text").text( $message.message.text );			
				let $message_meta_text = $("<div>").addClass( "message-meta-text");
				$message_meta_text.append( $message_author );
				$message_meta_text.append( $message_time );	
				$message_meta_text.append( $message_text );

				$article.append( $message_image );
				$article.append( $message_meta_text );
				return $article;
			}

			function loadMessages( ) {
				// not expecting use of promises or for them to understand them at least.
				$.ajax('/messages', { method: 'GET', dataType: "json" })
				.then(function (result) {
				  renderMessages(result);
				});
			}

			function renderMessages( messages ) {
        		console.log ("Data: " ,  messages );
        		messages.forEach( ( message ) => {
        			let $article = createArticle( message );
        			$("#messages-list").append( $article );
        		});
        	}	

			function submitMessage( message ) {
			    $.post("/messages/new" , message , function(data, status){
			        console.log("Data: " + data + "\nStatus: " + status);
			    });

			}



			$( document ).ready(function() {

				$("#message").keydown(function(event){
					if ( event.which === 13 ) {
						event.preventDefault( );
					 	let message = {
						 "user": {
						 "name": "Jen",
						 "image": "https://media.licdn.com/dms/image/C5603AQHdf6_kg8hgQQ/profile-displayphoto-shrink_200_200/0?e=1550102400&v=beta&t=oCvoGYvobx8N0HW48inSyBYlnDy1w813XLhjyJ4fPgM"
						 },
						 "message": {
						 "text": event.target.value,
						 "date": ( new Date( ) ).getTime( )
						 }
					 };		
						let $article = createArticle( message );
	        			$("#messages-list").prepend( $article );	
	        			event.target.value = "";
						console.log( message );			
						submitMessage( message );
					}
				 });				

				loadMessages( );

	    	});



