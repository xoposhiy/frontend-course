git branch | tr -d ' *' | awk '{print "git push -f origin "$1}' > do-push-branches.sh
./do-push-branches.sh
rm ./do-push-branches.sh
