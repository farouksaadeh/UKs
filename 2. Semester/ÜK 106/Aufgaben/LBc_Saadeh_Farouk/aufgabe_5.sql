SELECT p.firstname, p.lastname, c.name
FROM
  person p
INNER JOIN person_course_execution pce ON p.id = pce.fk_participant_id
INNER JOIN course_execution ce ON pce.fk_course_execution_id = ce.id
INNER JOIN course c ON ce.fk_course_id = c.id
WHERE ce.room = 'Red';