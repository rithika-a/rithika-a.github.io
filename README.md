# Ruby Setup Instructions (on Mac)

1. Install Conda: https://github.com/conda-forge/miniforge
2. Create new conda environment: `mamba create -n website_env ruby compilers python==3.12`
3. Activate conda environment: `conda activate website_env`
4. Install bundle gem: `gem install bundler`
5. From this directory, run `bundle`

# Subsequent Steps (to view website locally)

1. Activate conda environment if not already: `conda activate website_env`
2. Run `bundle exec jekyll s`
3. Open browser and navigate to http://localhost:4000
