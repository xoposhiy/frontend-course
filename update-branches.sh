# Create (or update) branches by the following rules: 
# 1. 'before WORD bla-bla-bla' → branch WORD
# 2. 'finished WORD bla-bla-bla' → branch WORD-finished
echo echo temporary file > do-update-branches.sh
git log --format=oneline --grep='finished' | awk 'BEGIN {FS=" "} { print "git branch -D "$3"-finished & git branch "$3"-finished "$1}'  >> do-update-branches.sh
git log --format=oneline --grep='before' | awk 'BEGIN {FS=" "} { print "git branch -D "$3" & git branch "$3" "$1}' >> do-update-branches.sh
echo git branch -D start  >> do-update-branches.sh
echo git branch start modules >> do-update-branches.sh
./do-update-branches.sh
rm do-update-branches.sh
