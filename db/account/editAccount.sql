update users

set firstName = $1,
    lastName = $2

where user_id = $3