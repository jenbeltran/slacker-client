var user = {
"user": {
 "name": "@jenbeltran",
 "image": "https://media.licdn.com/dms/image/C5603AQHdf6_kg8hgQQ/profile-displayphoto-shrink_200_200/0?e=1547078400&v=beta&t=0fuvlRbyGvrtjWDwOrr6Hw-iS2CvYsXKFG9nmIutXLU",
 "full-name" : "Francesca Jen Beltran",
 "phone" : "416-123-4567",
 "city" : "Toronto, ON",
 "email" : "jen@yorku.ca",
 "street" : "123 York Dr., M63 3N2, Toronto, ON",
 "description" : "Jen has over five years of experience in the financial industry, having obtained roles in Retail, Operations and Commercial Banking. Currently completing a Full Stack Web Development Certificate at York University to switch careers into mobile app development."
 }
}

document.getElementById( "user-name" ).innerHTML = user[ 'user' ]['name'];
document.getElementById( "user-image" ).innerHTML = user[ 'user' ]['image'];
document.getElementById( "user-fullName" ).innerHTML = user[ 'user' ]['full-name'];
document.getElementById( "user-phone" ).innerHTML = user[ 'user' ]['phone'];
document.getElementById( "user-city" ).innerHTML = user[ 'user' ]['city'];
document.getElementById( "user-email" ).innerHTML = user[ 'user' ]['email'];
document.getElementById( "user-street" ).innerHTML = user[ 'user' ]['street'];
document.getElementById( "user-description" ).innerHTML = user[ 'user' ]['description'];


