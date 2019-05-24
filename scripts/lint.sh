#!/bin/bash

echo 'Linting Scss...'
./node_modules/.bin/stylelint 'src' --config .stylelintrc;

echo 'Linting JavaScript...'
./node_modules/.bin/eslint ./src;
