USE `skills_survey`;

--  CREATE TABLE `global_level_list` (
-- 	rid			integer unsigned AUTO_INCREMENT,
-- 	list_text	varchar(2048),
-- 	list_date	DATETIME,
-- 	current		boolean,
-- 	deleted		boolean,
-- 	PRIMARY KEY(`rid`)
-- );
INSERT INTO `global_level_list` (`list_text`,`list_date`) VALUES
("'unknown','know_what_its_for','used_and_understood','used_in_custom_project', used_frequently','used_frequently_and_in_depth','can_teach_the_subject',",NOW());

-- CREATE TABLE `method_list` (
-- 	rid			integer unsigned AUTO_INCREMENT,
-- 	method_text	varchar(2048),
-- 	method_date	DATETIME,
-- 	current		boolean,
-- 	deleted		boolean,
-- 	PRIMARY KEY(`rid`)
-- );
INSERT INTO `global_method_list` (`method_text`,`method_date`) VALUES
("'unused','can_use_via_console','can_use_via_CLI','can_use_via_IaC','can_integrate_with_Tooling','can_configure_via_console','can_configure_via_CLI','can_configure_via_IaC','can_configure_in_multi_regions','can_extend_with_custom_tools',",NOW());

-- CREATE TABLE `global_acquiredby_list` (
-- 	rid			integer unsigned AUTO_INCREMENT,
-- 	acquiredby_text	varchar(2048),
-- 	acquiredby_date	DATETIME,
-- 	current		boolean,
-- 	deleted		boolean,
-- 	PRIMARY KEY(`rid`)
-- );
INSERT INTO `global_acquiredby_list` (`acquiredby_text`,`acquiredby_date`) VALUES
("'none','personal/tutorial','OJT','BootCamp','Stelligent U','Certificate','Degree'",NOW());

-- CREATE TABLE `adm_user` (
-- 	rid			integer unsigned AUTO_INCREMENT,
-- 	employee_no	CHAR(20),
-- 	name_last	CHAR(255),
-- 	name_first	CHAR(255),
-- 	name_middle	CHAR(255),
-- 	email		CHAR(255),
-- 	active		boolean,
-- 	deleted		boolean,
-- 	PRIMARY KEY(`rid`)
-- );
-- INSERT INTO `adm_user` () VALUES








