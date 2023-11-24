# Bun Nook Kit CLI
The quickest way to get start with Bun Nook Kit is with the CLI, you can easily get spun up with a BNK server with a single command:

```bash
bash <(curl -fsSL https://raw.githubusercontent.com/brandon-schabel/bun-nook-kit/main/scripts/quickstart.sh)
```

This will get you going quickly, and if you follow along with the console, you'll be prompted to updated your `.zshrc` or `.bashrc` with a cli function that BNK uses to get the most updated globally installed `bnkit` version.

Once you update your `.zshrc` or `.bashrc` make sure to either restart your terminal or run 
`source ~/.zshrc` or `source ~/.bashrc`  to refresh your terminal environment.

### (Optional) Manual CLI Installed
If you followed the quickstart above and updated your `.zshrc` or  `.bashrc` withe setup from the quickstart there is no reason to do this.
### Global Install `bnkit`:
```bash
bun add -g bnkit
```

### Update your `.zshrc` or `.bashrc`  with the following script:
```bash
function run_bnk_cli() {
    echo "Bun install location: $BUN_INSTALL"
    echo "Bun Nook Kit install location: $BNKIT_PATH"

    # Find the latest version of bnkit
    versions=$(ls $BNKIT_PATH | sort -V)
    latest_version=$(echo "$versions" | tail -1)

    echo "Latest version of bnkit: $latest_version"

    # Define the path to the cli.sh script in the latest version
    cli_script_path="$BNKIT_PATH/$latest_version/scripts/cli.sh"

    echo "cli.sh path: $cli_script_path"

    # Check if the script exists
    if [[ -f "$cli_script_path" ]]; then
        # Run the script with the --dir flag set to the current directory
        "$cli_script_path" --dir "$(pwd)"
    else
        echo "cli.sh not found in the latest version of bnkit."
    fi
}

alias bnkcli='run_bnk_cli'
```

### Use the CLI to create a project
`bnkcli`

The CLI will prompt you with a selection
## Quickstart
- This will spin you up with a project very quickly, this is the same thing used in the single line quickstart.
## Fly Deploy
- This will generate the necessary files you'll need to get going with a Fly.io deployment.

## CLI Goal
The main goal of the CLI is to provide basically scaffolding configurations for extremely fast BNK setups, stacks, and deployment environments. Likely instead of having a bun of different stack, there will be a few base stacks and then the CLI will be used to add various configurations. This prevents the stacks and starter project from getting overly bloated and then gives you the option of choosing what you need to install/setup for your project, giving you yet another level of control and development velocity for your project(s),  