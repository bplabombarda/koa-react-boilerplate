#!/bin/bash

rm -rf data;
mkdir data;
http --download \
  https://apps.ams.usda.gov/FarmersMarketsExport/ExcelExport.aspx \
  --ignore-stdin \
  --output data/markets.csv
