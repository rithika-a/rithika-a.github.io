# Ruby Setup Instructions (on Mac)

1. Install Conda: https://github.com/conda-forge/miniforge
2. Create new conda environment: `mamba create -n website_env ruby compilers`
3. Activate conda environment: `conda activate website_env`
4. Install bundle gem: `gem install bundler`
5. From this directory, run `bundle`

# Subsequent Steps (to view website locally)

1. Activate conda environment if not already: `conda activate website_env`
2. Run `bundle exec jekyll s`
3. Open browser and navigate to http://localhost:4000


# Making a new post

1. jekyll draft "post title"
2. Open the file in _drafts/post_title.md
3. Add the post content
    - Use the markdown viewer (cmd + shift + v) to preview the post
4. To publish, run `jekyll publish _drafts/post_title.md`
5. Run `jekyll s`, view at http://localhost:4000 to ensure post was published
6. Add and push to github
    - `git status`
    - `git add _posts`
    - `git commit -m "commit message"`
    - `git push`
