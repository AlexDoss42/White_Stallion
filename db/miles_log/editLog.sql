update miles_log 

set distance = $1,
    highway_miles = $2,
    city_miles = $3

where miles_id = $4