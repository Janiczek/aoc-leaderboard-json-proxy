#!/usr/bin/env bash

URL="${1}"
COOKIE="${2}"

curl "${URL}" -H "Cookie: session=${COOKIE}"
