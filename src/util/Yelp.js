//Be sure to REMOVE the below befor pushing to git hub public
const accessToken = '';


const Yelp = {

   search (term, location, sortBy) {
     return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}&limit=50`,
        {headers: { Authorization: `Bearer ${accessToken}` }
    }).then(response => {
             return response.json(); }).then( jsonResponse => {
      if (jsonResponse.businesses ) {
          return jsonResponse.businesses.map( business => {
            return {
                          key: business.id,
                          name: business.name,
                          imageSrc: business.image_url,
                          address: business.location['address1'],
                          city:  business.location['city'],
                          state: business.location['state'],
                          zipCode: business.location['zip_code'],
                          category: business.categories[0]['alias'],
                          rating: business.rating,
                          reviewCount: business.review_count
                        };
          });
      }
    } )
   }
 }

export default Yelp;
