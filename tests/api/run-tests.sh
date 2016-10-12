#!/usr/bin/env bash

# Download silk if not here.
if [ ! -f ./silk ]; then
  wget https://github.com/matryer/silk/releases/download/0.5.1/silk-0.5.1-linux-amd64.zip
  tar -xzf silk-0.5.1-linux-amd64.zip
  chmod a+x silk
fi

# Run the tests.
./silk -silk.url="https://spp.dev.cruk.org" ./tests/*
