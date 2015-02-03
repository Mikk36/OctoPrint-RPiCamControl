# coding=utf-8
from __future__ import absolute_import

### (Don't forget to remove me)
# This is a basic skeleton for your plugin's __init__.py. You probably want to adjust the class name of your plugin
# as well as the plugin mixins it's subclassing from. This is really just a basic skeleton to get you started.

import octoprint.plugin

class RPiCamControlPlugin(octoprint.plugin.AssetPlugin):
  def get_assets(self):
    return dict(
      js=["js/script.js"]
    )
	
__plugin_name__ = "RPi Camera Control"
__plugin_implementations__ = [RPiCamControlPlugin()]
