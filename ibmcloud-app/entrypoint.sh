#!/bin/bash

cd app

npx sequelize db:migrate
npm start