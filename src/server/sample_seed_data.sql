--user
INSERT INTO user(user_id, caregiver_type, email, hashed_password, profile_picture, first_name, last_name) VALUES
  (1, 'parent', 'parent.name@email.com', 'mypassword', 'Mom', 'Magic'),
--center
INSERT INTO center(center_id, user_id, room_id,) VALUES
  (),
--room
INSERT INTO room(room_id, group_name, age_range, child_id, user_id, activity_id, journal_id) VALUES
  (),
--child
INSERT INTO child(child_id, profile_picture, first_name, last_name, date_of_birth, room_id, home_address, graduation_estimate, schedule_id, medical_id, on_photo_list?, journal_id, elect_count, emergency_contacts, notes, is_siged_in?) VALUES
  (),
--journal
INSERT INTO journal(journal_id, child_id, date, journal_image, mood_id, diaper_changes, menu_id, amount_eaten, need_supplies?, supplies_id, daily_observation, elect_id
user_id) VALUES
  (),
--completed_activity
INSERT INTO completed_activity(activity_id, interest_id, elect_id, activity_description, materials, activity_image, child_id, user_id) VALUES
  (),
--planned_activity
INSERT INTO planned_activity(plannned_activity_id, interest_id, elect_id, activity_description, materials, activity_id) VALUES
  (),
--interest
INSERT INTO interest(interest_id, interest_label) VALUES
  (),
--ELECT
INSERT INTO ELECT(elect_id, age_range, domain) VALUES
  (),
