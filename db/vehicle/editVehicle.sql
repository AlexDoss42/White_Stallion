update vehicle

set make = $1,
    model = $2,
    year = $3,
    miles = $4,
    owner = $5

where vehicle_id = $6