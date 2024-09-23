CREATE TABLE category (
    id INT AUTO_INCREMENT
    name VARCHAR(25) NOT NULL
    PRIMARY KEY(id)
);

CREATE TABLE category_course (
    fk_category_id INT NOT NULL
    fk_course_id INT NOT NULL
    created_at DATETIME NOT NULL
    FOREIGN KEY(fk_category_id) REFERENCES category(id),
    FOREIGN KEY(fk_course_id) REFERENCES course(id)
);