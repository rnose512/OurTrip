User.destroy_all
TripsUser.destroy_all
Trip.destroy_all
UserExpense.destroy_all
Expense.destroy_all
PackingList.destroy_all
Item.destroy_all
Destination.destroy_all
Transportation.destroy_all
Event.destroy_all
Accomodation.destroy_all

User.create!({
  first_name: "Hannie",
  last_name: "Dong",
  email: "hannie@email.com",
  password: "password",
  phone_number: "000-000-0000",
  emergency_contact: "bob",
  emergency_contact_phone_number: "111-111-1111"
})

User.create!({
  first_name: "Hawken",
  last_name: "Ritter",
  email: "hawken@email.com",
  password: "password",
  phone_number: "222-222-2222",
  emergency_contact: "Sally",
  emergency_contact_phone_number: "333-333-3333"
})

User.create!({
  first_name: "Peter",
  last_name: "Thompson",
  email: "peter@email.com",
  password: "password",
  phone_number: "444-444-4444",
  emergency_contact: "Charles",
  emergency_contact_phone_number: "555-555-5555"
})

User.create!({
  first_name: "Ashley",
  last_name: "Teow",
  email: "ashley@email.com",
  password: "password",
  phone_number: "666-666-6666",
  emergency_contact: "Nancy",
  emergency_contact_phone_number: "666-666-6666"
})

User.create!({
  first_name: "Rio",
  last_name: "Nose",
  email: "rio@email.com",
  password: "password",
  phone_number: "777-777-7777",
  emergency_contact: "Jack",
  emergency_contact_phone_number: "888-888-8888"
})

Trip.create!({
	name: "Hawken's Birthday Bonanza",
	start_date: "2017-09-15",
	end_date: "2017-09-30",
	creator_id: User.first.id
	})

Destination.create!({
	name: "Bali, Indonesia",
	trip_id: Trip.first.id,
	start_date: "2017-09-15",
	end_date: "2017-09-30"
	})

TripsUser.create!({user_id: User.first.id, trip_id: Trip.first.id})
TripsUser.create!({user_id: User.second.id, trip_id: Trip.first.id})
TripsUser.create!({user_id: User.third.id, trip_id: Trip.first.id})
TripsUser.create!({user_id: User.fourth.id, trip_id: Trip.first.id})
TripsUser.create!({user_id: User.fifth.id, trip_id: Trip.first.id})

Event.create!({title: "surfing", category: "activity", description:"fun taimz", start_time: "2017-09-16 18:40:00", end_time: "2017-09-16 18:40:00", destination_id: Destination.first.id})

Event.create!({title: "birthday dinner", category: "food", description:"omnomnom", start_time: "2017-09-16 20:30:00", end_time: "2017-09-16 21:30:00", destination_id: Destination.first.id})

10.times do
	Expense.create!({price: 4.50, event_id: Event.first.id, payer_id: User.first.id})
end

10.times do 
	UserExpense.create!({user_id: User.second.id, expense_id: [1,2,3,4,5].sample})
end

PackingList.create!({category: "Toiletries", trip_id: Trip.first.id})

Item.create!({title: "Toothpaste", quantity: 1, packing_list_id: PackingList.first.id})
Item.create!({title: "Toothbrush", quantity: 1, packing_list_id: PackingList.first.id})
Item.create!({title: "Facewash", quantity: 1, packing_list_id: PackingList.first.id})

Transportation.create!({
	title: "flight to Bali",
	confirmation_number: "AA12BX",
	transportation_type: "flight",
	destination_id: Destination.first.id,
	user_id: User.first.id,
	arrival_time: "00:00:00",
	departure_time: "12:00:00"
	})

Transportation.create!({
	title: "flight to Bali",
	confirmation_number: "AA12BX",
	transportation_type: "flight",
	destination_id: Destination.first.id,
	user_id: User.second.id,
	arrival_time: "00:00:00",
	departure_time: "12:00:00"
	})

Transportation.create!({
	title: "flight to Bali",
	confirmation_number: "AA12BX",
	transportation_type: "flight",
	destination_id: Destination.first.id,
	user_id: User.third.id,
	arrival_time: "00:00:00",
	departure_time: "12:00:00"
	})

Transportation.create!({
	title: "flight to Bali",
	confirmation_number: "AA12BX",
	transportation_type: "flight",
	destination_id: Destination.first.id,
	user_id: User.fourth.id,
	arrival_time: "00:00:00",
	departure_time: "12:00:00"
	})

Transportation.create!({
	title: "flight to Bali",
	confirmation_number: "AA12BX",
	transportation_type: "flight",
	destination_id: Destination.first.id,
	user_id: User.fifth.id,
	arrival_time: "00:00:00",
	departure_time: "12:00:00"
	})


Accomodation.create!({name: "Airbnb on private beach", address: "Jalan Pantai Yeh Sumbul No.91, Medewi Yeh Sumbul, Bali, Yeh Sumbul, Negara, Kabupaten Jembrana, Bali 82261, Indonesia", phone_number: "62 818-6231-7208", price: 128.00, destination_id: Destination.first.id, check_in: "2017-09-16 14:00:00", check_out: "2017-09-20 11:00:00"})