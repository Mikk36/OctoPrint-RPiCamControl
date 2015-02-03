# coding=utf-8
from __future__ import absolute_import

import octoprint.plugin

class RPiCamControlPlugin(octoprint.plugin.AssetPlugin):
  def get_assets(self):
    return dict(
      js=["js/script.js"]
    )
	
__plugin_name__ = "RPi Camera Control"
__plugin_implementations__ = [RPiCamControlPlugin()]
