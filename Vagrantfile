# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
  config.vm.box = "precise64"
  config.vm.box_url = "http://files.vagrantup.com/precise64.box"

  # Update apt-get once
  $update_apt_get = <<SCRIPT
  if ! test -f .updated_apt_get; then
    sudo apt-get update
    touch .updated_apt_get
  fi
SCRIPT
  config.vm.provision "shell", inline: $update_apt_get

  # https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager#ubuntu-mint-elementary-os
  $install_node = <<SCRIPT
  if ! which node &> /dev/null; then
    sudo apt-get install -y python-software-properties python g++ make
    sudo add-apt-repository -y ppa:chris-lea/node.js
    sudo apt-get update
    sudo apt-get install -y nodejs
  fi
SCRIPT
  config.vm.provision "shell", inline: $install_node

  # Install library dependencies
  $install_dependencies = <<SCRIPT
  if ! which wmctrl &> /dev/null; then
    sudo apt-get install -y wmctrl xvfb x11-utils
  fi
SCRIPT
  config.vm.provision "shell", inline: $install_dependencies

  # Start up a fake X11 server
  $launch_xvfb = <<SCRIPT
    # Set and persist DISPLAY to :99.0
    export DISPLAY=:99.0
    if ! grep DISPLAY /etc/environment > /dev/null; then
      echo "DISPLAY=$DISPLAY" >> /etc/environment
    fi

    # Set up Xvfb
    /usr/bin/Xvfb $DISPLAY -screen 0 1024x768x24 &
SCRIPT
  config.vm.provision "shell", inline: $launch_xvfb

  # Trying out installing gnome-terminal to get a working window list
  # http://stackoverflow.com/questions/12252774/getting-window-list-in-xvfb-server#comment16435190_12252774
  # Tried out gnome-terminal. Seems to be self-terminating
  # Trying out gedit
  # gedit is starting but still same error
  # TODO: Try out x11 forwarding then wmctrl -l
  # http://itg.chem.indiana.edu/inc/wiki/software/openssh/200.html
  # vagrant ssh -- -X
  # sudo apt-get install x11-apps
  # wmctrl -l # works under x11 forwarding and lists host machine info
  # xclock seems to be in list too
  # much smaller alternative to gedit/gnome-terminal
  # but still no list without x11 forwarding
  # trying out openbox
  # http://forum.xbmc.org/showthread.php?tid=50500


  # Verify environment is properly configured
  $configure_env = <<SCRIPT
  if test "$VAGRANT" != "true"; then
    echo "VAGRANT=true" >> /etc/environment
  fi
SCRIPT
  config.vm.provision "shell", inline: $configure_env
end
