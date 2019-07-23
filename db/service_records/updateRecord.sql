update service_records

set price = $1,
    miles_driven = $2,
    part_name = $3
    -- date_of_service = $4

where service_id = $4