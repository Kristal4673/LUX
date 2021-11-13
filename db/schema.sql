DROP DATABASE IF EXISTS lux_db;
CREATE DATABASE lux_db;

-- tables
-- Table: car
CREATE TABLE car (
    car_id int  NOT NULL,
    make varchar(255)  NOT NULL,
    model varchar(255)  NOT NULL,
    year int  NOT NULL,
    mileage int  NOT NULL,
    available boolean  NOT NULL,
    CONSTRAINT car_pk PRIMARY KEY (car_id)
);

-- Table: customer
CREATE TABLE customer (
    id int  NOT NULL,
    name varchar(45)  NOT NULL,
    birth_date date  NOT NULL,
    license_number varchar(45)  NOT NULL,
    email varchar(45)  NOT NULL,
    phone varchar(45)  NOT NULL,
    age int  NOT NULL,
    insurance int  NOT NULL,
    CONSTRAINT customer_pk PRIMARY KEY (id)
);

-- Table: reservation
CREATE TABLE reservation (
    id int  NOT NULL,
    customer_id int  NOT NULL,
    price int  NOT NULL,
    start_date date  NOT NULL,
    end_date date  NOT NULL,
    car_id int  NOT NULL,
    CONSTRAINT reservation_pk PRIMARY KEY (id)
);

-- foreign keys
-- Reference: car_reservation (table: reservation)
ALTER TABLE reservation ADD CONSTRAINT car_reservation
    FOREIGN KEY (car_id)
    REFERENCES car (car_id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: customer_reservation (table: reservation)
ALTER TABLE reservation ADD CONSTRAINT customer_reservation
    FOREIGN KEY (customer_id)
    REFERENCES customer (id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

