SELECT p.firstname as "Vorname", p.lastname as "Nachname", COUNT(pce.fk_participant_id) as "Anzahl Anmeldungen"
FROM
  person p
INNER JOIN person_course_execution pce ON p.id = pce.fk_participant_id
GROUP BY p.id
HAVING COUNT(pce.fk_participant_id) <= 2
ORDER BY COUNT(pce.fk_participant_id) DESC;