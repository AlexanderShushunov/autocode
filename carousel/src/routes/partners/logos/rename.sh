#!/usr/bin/env zsh

#rename all files in the current directory from kebab-case to CamelCase
for f in *; do
    mv -v "$f" "$(echo $f | sed 's/-\([a-z]\)/\U\1/g')"
done