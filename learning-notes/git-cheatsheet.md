# ⚡ GIT CHEATSHEET – The Developer's Survival Guide

Because `git` is powerful—and terrifying when misused. This cheat sheet helps you *not* break things (too often).

---

## 🚀 1. Project Setup

```bash
git init                    # Start a new repo
git clone <repo-url>        # Clone existing repo
```

---

## 📄 2. Basic Workflow (Add → Commit → Push)

```bash
git status                  # What’s changed?
git add <file>              # Stage a specific file
git add .                   # Stage everything
git commit -m "message"     # Commit with a message
git push origin main        # Push to GitHub
```

---

## 🌱 3. Branching 101

```bash
git branch                  # List all branches
git branch <name>           # Create a new branch
git checkout <name>         # Switch to that branch
git checkout -b <name>      # Create + switch (1-liner)
git switch <name>           # Modern switch command
git merge <name>            # Merge branch into current
```

---

## 🧼 4. Undoing & Fixing Mistakes

```bash
git restore <file>          # Unstage or discard changes
git reset HEAD <file>       # Unstage a file
git reset --soft HEAD~1     # Undo last commit, keep changes
git reset --hard HEAD~1     # ⚠️ Undo + delete changes
git revert <commit-hash>    # Revert a specific commit
```

---

## 🌍 5. Remote Work

```bash
git remote -v                                # Check remotes
git remote add origin <url>                  # Link to GitHub
git push -u origin main                      # Push + set upstream
git pull origin main                         # Pull latest from main
```

---

## 🧠 6. Git Log & History Ninja Moves

```bash
git log                       # View commit history
git log --oneline             # Compact view
git log --graph --all --decorate --oneline  # Pretty tree
```

---

## 🔁 7. Stashing: Hide Work Without Committing

```bash
git stash                     # Stash changes
git stash list                # See stashes
git stash apply               # Reapply last stash
git stash pop                 # Apply + remove last stash
```

---

## 🔗 8. Tagging Releases

```bash
git tag v1.0                  # Create tag
git tag                      # List tags
git push origin v1.0         # Push specific tag
git push origin --tags       # Push all tags
```

---

## 🛠️ 9. Git Aliases (for Lazy Devs Like Me)

```bash
git config --global alias.st status
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.cm "commit -m"
```

---

## 💡 Bonus Tips

- Keep commits small & meaningful.

- Always pull before you push.

- Never git push --force on shared branches. Be nice.

- Use branches like outfits: change them before trying something new.

---

## 📚 Useful Resources

- [Git Official Docs](https://git-scm.com/doc)
- [GitHub Learning Lab](https://github.com/apps/github-learning-lab)
- [Oh Sh*t, Git!?!](https://ohshitgit.com/)


> ✨ Pro tip: Version control is your time machine. Treat it with respect.
