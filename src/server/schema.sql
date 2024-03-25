--user
CREATE TABLE user(
  user_id, 
  caregiver_type, 
  email, 
  hashed_password, 
  profile_picture, 
  first_name, 
  last_name
) 
--center
CREATE TABLE center(
  center_id
  user_id
  room_id
)
--room
CREATE TABLE room(
  room_id
  group_name
  age_range
  child_id
  user_id
  activity_id
  journal_id
)
--child
CREATE TABLE child(
  child_id
  profile_picture
  first_name
  last_name
  date_of_birth
  room_id
  home_address
  graduation_estimate
  schedule_id
  medical_id
  on_photo_list?
  journal_id
  elect_count
  emergency_contacts
  notes
  is_siged_in?
)
--journal
CREATE TABLE journal(
  journal_id
  child_id
  date
  journal_image
  mood_id
  diaper_changes
  menu_id
  amount_eaten
  need_supplies?
  supplies_id
  daily_observation
  elect_id
  user_id
)
--completed_activity
CREATE TABLE completed_activity(
  activity_id
  interest_id
  elect_id
  activity_description
  materials
  activity_image
  child_id
  user_id
)
--planned_activity
CREATE TABLE planned_activity(
  plannned_activity_id
  interest_id
  elect_id
  activity_description
  materials
  activity_id
)
--interest
CREATE TABLE interest(
  interest_id
  interest_label
)
--ELECT
CREATE TABLE ELECT(
  elect_id
  age_range
  domain
)