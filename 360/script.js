(function(){
    var script = { "definitions": [
 {
  "video": [
   {
    "width": 4096,
    "url": "media/media_DCBBBB79_D7E0_DCF0_41EA_07434FFD9A0A.mp4",
    "framerate": 29.97,
    "type": "video/mp4",
    "bitrate": 18855,
    "posterURL": "media/media_DCBBBB79_D7E0_DCF0_41EA_07434FFD9A0A_poster.jpg",
    "height": 2048,
    "class": "Video360Resource"
   },
   {
    "width": 3168,
    "url": "media/media_DCBBBB79_D7E0_DCF0_41EA_07434FFD9A0A_ios.mp4",
    "framerate": 29.97,
    "type": "video/mp4",
    "bitrate": 11279,
    "posterURL": "media/media_DCBBBB79_D7E0_DCF0_41EA_07434FFD9A0A_poster.jpg",
    "height": 1584,
    "class": "Video360Resource"
   }
  ],
  "thumbnailUrl": "media/media_DCBBBB79_D7E0_DCF0_41EA_07434FFD9A0A_t.jpg",
  "partial": false,
  "hfovMin": 60,
  "loop": false,
  "pitch": 0,
  "vfov": 180,
  "label": "insta360-one-x-london-eye-5.7k-sample-footage",
  "id": "media_DCBBBB79_D7E0_DCF0_41EA_07434FFD9A0A",
  "hfov": 360,
  "hfovMax": 140,
  "class": "Video360"
 },
 {
  "items": [
   {
    "media": "this.media_DCBBBB79_D7E0_DCF0_41EA_07434FFD9A0A",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 0)",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerPanoramaPlayer); this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "player": {
     "gyroscopeVerticalDraggingEnabled": true,
     "mouseControlMode": "drag_acceleration",
     "buttonToggleHotspots": {
      "textDecoration": "none",
      "paddingLeft": 0,
      "fontFamily": "Arial",
      "rollOverIconHeight": 30,
      "fontColor": "#FFFFFF",
      "shadowBlurRadius": 6,
      "id": "Button_4DE935B8_5A86_4CD2_41A9_D487E3DF3FBA",
      "width": 60,
      "shadowColor": "#000000",
      "iconURL": "skin/Button_4DE935B8_5A86_4CD2_41A9_D487E3DF3FBA.png",
      "iconWidth": 30,
      "backgroundOpacity": 1,
      "pressedIconHeight": 30,
      "backgroundColorRatios": [
       0
      ],
      "shadow": false,
      "rollOverBackgroundColorRatios": [
       0
      ],
      "backgroundColorDirection": "vertical",
      "minHeight": 1,
      "borderColor": "#000000",
      "shadowSpread": 1,
      "paddingTop": 0,
      "rollOverIconWidth": 30,
      "pressedIconURL": "skin/Button_4DE935B8_5A86_4CD2_41A9_D487E3DF3FBA_pressed.png",
      "pressedIconWidth": 30,
      "height": 60,
      "class": "Button",
      "minWidth": 1,
      "mode": "toggle",
      "backgroundColor": [
       "#F7931E"
      ],
      "paddingRight": 0,
      "pressedRollOverBackgroundColor": [
       "#CE6700"
      ],
      "fontSize": 12,
      "pressedRollOverBackgroundColorRatios": [
       0
      ],
      "horizontalAlign": "center",
      "rollOverBackgroundOpacity": 1,
      "fontStyle": "normal",
      "iconBeforeLabel": true,
      "propagateClick": false,
      "iconHeight": 30,
      "borderSize": 0,
      "data": {
       "name": "Button Settings HS"
      },
      "rollOverBackgroundColor": [
       "#CE6700"
      ],
      "gap": 5,
      "paddingBottom": 0,
      "verticalAlign": "middle",
      "layout": "horizontal",
      "cursor": "hand",
      "fontWeight": "normal",
      "borderRadius": 0
     },
     "buttonCardboardView": {
      "textDecoration": "none",
      "paddingLeft": 0,
      "fontFamily": "Arial",
      "fontColor": "#FFFFFF",
      "shadowBlurRadius": 6,
      "id": "Button_4D1C404A_5A87_C3B6_41BC_63B811C40CD0",
      "width": 60,
      "shadowColor": "#000000",
      "iconURL": "skin/Button_4D1C404A_5A87_C3B6_41BC_63B811C40CD0.png",
      "iconWidth": 30,
      "backgroundOpacity": 1,
      "backgroundColorRatios": [
       0
      ],
      "shadow": false,
      "rollOverBackgroundColorRatios": [
       0
      ],
      "backgroundColorDirection": "vertical",
      "minHeight": 1,
      "borderColor": "#000000",
      "shadowSpread": 1,
      "paddingTop": 0,
      "iconBeforeLabel": true,
      "pressedIconURL": "skin/Button_4D1C404A_5A87_C3B6_41BC_63B811C40CD0_pressed.png",
      "height": 60,
      "class": "Button",
      "minWidth": 1,
      "mode": "push",
      "backgroundColor": [
       "#F7931E"
      ],
      "paddingRight": 0,
      "fontSize": 12,
      "horizontalAlign": "center",
      "rollOverBackgroundOpacity": 1,
      "fontStyle": "normal",
      "propagateClick": false,
      "iconHeight": 30,
      "borderSize": 0,
      "data": {
       "name": "Button settings VR"
      },
      "rollOverBackgroundColor": [
       "#CE6700"
      ],
      "gap": 5,
      "paddingBottom": 0,
      "verticalAlign": "middle",
      "layout": "horizontal",
      "cursor": "hand",
      "fontWeight": "normal",
      "borderRadius": 0
     },
     "touchControlMode": "drag_rotation",
     "id": "MainViewerPanoramaPlayer",
     "buttonToggleGyroscope": {
      "textDecoration": "none",
      "paddingLeft": 0,
      "fontFamily": "Arial",
      "rollOverIconHeight": 30,
      "fontColor": "#FFFFFF",
      "id": "Button_485BFF41_598E_3DB2_41A9_33F36E014467",
      "width": 60,
      "shadowBlurRadius": 6,
      "shadowColor": "#000000",
      "iconURL": "skin/Button_485BFF41_598E_3DB2_41A9_33F36E014467.png",
      "iconWidth": 30,
      "backgroundOpacity": 1,
      "pressedIconHeight": 30,
      "backgroundColorRatios": [
       0
      ],
      "shadow": false,
      "rollOverBackgroundColorRatios": [
       0
      ],
      "backgroundColorDirection": "vertical",
      "minHeight": 1,
      "borderColor": "#000000",
      "shadowSpread": 1,
      "paddingTop": 0,
      "rollOverIconWidth": 30,
      "pressedIconURL": "skin/Button_485BFF41_598E_3DB2_41A9_33F36E014467_pressed.png",
      "pressedIconWidth": 30,
      "height": 60,
      "class": "Button",
      "minWidth": 1,
      "mode": "toggle",
      "backgroundColor": [
       "#F7931E"
      ],
      "paddingRight": 0,
      "pressedRollOverBackgroundColor": [
       "#CE6700"
      ],
      "fontSize": 12,
      "pressedRollOverBackgroundColorRatios": [
       0
      ],
      "horizontalAlign": "center",
      "rollOverBackgroundOpacity": 1,
      "fontStyle": "normal",
      "iconBeforeLabel": true,
      "propagateClick": false,
      "iconHeight": 30,
      "borderSize": 0,
      "data": {
       "name": "Button Settings Gyro"
      },
      "rollOverBackgroundColor": [
       "#CE6700"
      ],
      "gap": 5,
      "paddingBottom": 0,
      "verticalAlign": "middle",
      "layout": "horizontal",
      "cursor": "hand",
      "fontWeight": "normal",
      "borderRadius": 0
     },
     "viewerArea": "this.MainViewer",
     "displayPlaybackBar": true,
     "class": "PanoramaPlayer"
    },
    "camera": {
     "manualRotationSpeed": 1800,
     "automaticZoomSpeed": 10,
     "initialPosition": {
      "yaw": 0,
      "hfov": 120,
      "pitch": 0,
      "class": "RotationalCameraPosition"
     },
     "manualZoomSpeed": 1,
     "id": "media_DCBBBB79_D7E0_DCF0_41EA_07434FFD9A0A_camera",
     "automaticRotationSpeed": 10,
     "class": "RotationalCamera"
    },
    "class": "Video360PlayListItem"
   },
   {
    "media": {
     "video": [
      {
       "width": 4096,
       "url": "media/media_DC76EA73_D7E0_FCF0_41DC_3D79611B72D7.mp4",
       "framerate": 29.97,
       "type": "video/mp4",
       "bitrate": 18855,
       "posterURL": "media/media_DC76EA73_D7E0_FCF0_41DC_3D79611B72D7_poster.jpg",
       "height": 2048,
       "class": "Video360Resource"
      },
      {
       "width": 3168,
       "url": "media/media_DC76EA73_D7E0_FCF0_41DC_3D79611B72D7_ios.mp4",
       "framerate": 29.97,
       "type": "video/mp4",
       "bitrate": 11279,
       "posterURL": "media/media_DC76EA73_D7E0_FCF0_41DC_3D79611B72D7_poster.jpg",
       "height": 1584,
       "class": "Video360Resource"
      }
     ],
     "thumbnailUrl": "media/media_DC76EA73_D7E0_FCF0_41DC_3D79611B72D7_t.jpg",
     "partial": false,
     "hfovMin": 60,
     "loop": false,
     "pitch": 0,
     "vfov": 180,
     "label": "insta360-one-x-tower-bridge-4k-sample-footage",
     "id": "media_DC76EA73_D7E0_FCF0_41DC_3D79611B72D7",
     "hfov": 360,
     "hfovMax": 140,
     "overlays": [
      {
       "inertia": false,
       "angle": 0,
       "image": {
        "levels": [
         {
          "url": "media/media_DC76EA73_D7E0_FCF0_41DC_3D79611B72D7_tcap0.png",
          "width": 850,
          "height": 850,
          "class": "ImageResourceLevel"
         }
        ],
        "class": "ImageResource"
       },
       "rotate": false,
       "id": "media_DC76EA73_D7E0_FCF0_41DC_3D79611B72D7_tcap0",
       "distance": 50,
       "hfov": 30,
       "class": "TripodCapPanoramaOverlay"
      },
      {
       "inertia": false,
       "angle": 180,
       "image": {
        "levels": [
         {
          "url": "media/media_DC76EA73_D7E0_FCF0_41DC_3D79611B72D7_tcap0.png",
          "width": 850,
          "height": 850,
          "class": "ImageResourceLevel"
         }
        ],
        "class": "ImageResource"
       },
       "rotate": false,
       "id": "media_DC76EA73_D7E0_FCF0_41DC_3D79611B72D7_ccap0",
       "distance": 50,
       "hfov": 45,
       "class": "CeilingCapPanoramaOverlay"
      },
      {
       "areas": [
        {
         "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_C6660D83_D7E0_D410_41C7_ED8C7DC6A702, {'paddingTop':5,'paddingRight':5,'rollOverBorderColor':'#000000','rollOverBorderSize':0,'rollOverBackgroundOpacity':0.3,'iconColor':'#000000','rollOverIconColor':'#666666','pressedBorderSize':0,'pressedBackgroundColorDirection':'vertical','pressedIconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'backgroundOpacity':0.3,'borderSize':0,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'iconHeight':20,'pressedIconWidth':20,'rollOverIconLineWidth':5,'backgroundColorDirection':'vertical','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconWidth':20,'pressedBorderColor':'#000000','paddingLeft':5,'paddingBottom':5,'iconWidth':20,'rollOverIconHeight':20,'pressedIconColor':'#888888','iconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, true) } else { this.showPopupMedia(this.window_C7BE4E61_D7E0_D410_41E3_A31B00F96705, this.video_C7896FDE_D7E0_D430_41C5_9927F73DC2B1, this.PlayList_C7021FC4_D7E0_5410_41E2_A9FFF281BC96, '95%', '95%', true, true) }",
         "mapColor": "#FF0000",
         "class": "HotspotPanoramaOverlayArea"
        }
       ],
       "data": {
        "label": "Image"
       },
       "rollOverDisplay": false,
       "useHandCursor": true,
       "items": [
        {
         "playbackPositions": [
          {
           "roll": 0,
           "timestamp": 0,
           "pitch": -11.28,
           "opacity": 0,
           "yaw": -96.79,
           "hfov": 11.29,
           "class": "PanoramaOverlayPlaybackPosition"
          },
          {
           "roll": 0,
           "timestamp": 5.01,
           "pitch": -11.28,
           "opacity": 0,
           "yaw": -96.79,
           "hfov": 11.29,
           "class": "PanoramaOverlayPlaybackPosition"
          },
          {
           "roll": 0,
           "timestamp": 5.01,
           "pitch": -11.28,
           "opacity": 1,
           "yaw": -96.79,
           "hfov": 11.29,
           "class": "PanoramaOverlayPlaybackPosition"
          }
         ],
         "distance": 50,
         "image": {
          "levels": [
           {
            "url": "media/media_DC76EA73_D7E0_FCF0_41DC_3D79611B72D7_HS_0_0.png",
            "width": 131,
            "height": 115,
            "class": "ImageResourceLevel"
           }
          ],
          "class": "ImageResource"
         },
         "pitch": 0,
         "yaw": 0,
         "class": "HotspotPanoramaOverlayImage"
        }
       ],
       "id": "overlay_D83196ED_D7E0_5410_41E1_83267BD902C4",
       "enabledInCardboard": true,
       "maps": [
        {
         "yaw": 0,
         "playbackPositions": [
          {
           "roll": 0,
           "timestamp": 0,
           "pitch": -11.28,
           "opacity": 0,
           "yaw": -96.79,
           "hfov": 11.29,
           "class": "PanoramaOverlayPlaybackPosition"
          },
          {
           "roll": 0,
           "timestamp": 5.01,
           "pitch": -11.28,
           "opacity": 0,
           "yaw": -96.79,
           "hfov": 11.29,
           "class": "PanoramaOverlayPlaybackPosition"
          },
          {
           "roll": 0,
           "timestamp": 5.01,
           "pitch": -11.28,
           "opacity": 1,
           "yaw": -96.79,
           "hfov": 11.29,
           "class": "PanoramaOverlayPlaybackPosition"
          }
         ],
         "image": {
          "levels": [
           {
            "url": "media/media_DC76EA73_D7E0_FCF0_41DC_3D79611B72D7_HS_0_0_0_map.gif",
            "width": 18,
            "height": 16,
            "class": "ImageResourceLevel"
           }
          ],
          "class": "ImageResource"
         },
         "pitch": 0,
         "class": "HotspotPanoramaOverlayMap"
        }
       ],
       "class": "HotspotPanoramaOverlay"
      },
      {
       "showDuration": 500,
       "autoplay": true,
       "popupMaxWidth": "95%",
       "rotationZ": 0,
       "rotationY": 0,
       "class": "PopupPanoramaOverlay",
       "hideEasing": "cubic_out",
       "id": "popup_C6660D83_D7E0_D410_41C7_ED8C7DC6A702",
       "rotationX": 0,
       "popupDistance": 100,
       "showEasing": "cubic_in",
       "loop": false,
       "playbackPositions": [
        {
         "yaw": -96.79,
         "timestamp": 0,
         "hfov": 11.29,
         "pitch": -11.28,
         "class": "PopupPanoramaOverlayPlaybackPosition"
        },
        {
         "yaw": -96.79,
         "timestamp": 5.01,
         "hfov": 11.29,
         "pitch": -11.28,
         "class": "PopupPanoramaOverlayPlaybackPosition"
        },
        {
         "yaw": -96.79,
         "timestamp": 5.01,
         "hfov": 11.29,
         "pitch": -11.28,
         "class": "PopupPanoramaOverlayPlaybackPosition"
        }
       ],
       "pitch": 0,
       "hideDuration": 500,
       "popupMaxHeight": "95%",
       "yaw": 0,
       "hfov": 10,
       "video": {
        "width": 3168,
        "mp4Url": "media/video_C7896FDE_D7E0_D430_41C5_9927F73DC2B1.mp4",
        "height": 1584,
        "class": "VideoResource"
       }
      }
     ],
     "class": "Video360"
    },
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 1, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 1)",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerPanoramaPlayer); this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": {
     "manualRotationSpeed": 1800,
     "automaticZoomSpeed": 10,
     "initialPosition": {
      "yaw": 0,
      "hfov": 120,
      "pitch": 0,
      "class": "RotationalCameraPosition"
     },
     "manualZoomSpeed": 1,
     "id": "media_DC76EA73_D7E0_FCF0_41DC_3D79611B72D7_camera",
     "automaticRotationSpeed": 10,
     "class": "RotationalCamera"
    },
    "class": "Video360PlayListItem"
   },
   {
    "media": {
     "class": "Video",
     "thumbnailUrl": "media/video_C7896FDE_D7E0_D430_41C5_9927F73DC2B1_t.jpg",
     "scaleMode": "fit_inside",
     "width": 3168,
     "label": "insta360-one-x-london-eye-5.7k-sample-footage",
     "loop": false,
     "id": "video_C7896FDE_D7E0_D430_41C5_9927F73DC2B1",
     "height": 1584,
     "video": {
      "width": 3168,
      "mp4Url": "media/video_C7896FDE_D7E0_D430_41C5_9927F73DC2B1.mp4",
      "height": 1584,
      "class": "VideoResource"
     }
    },
    "end": "this.trigger('tourEnded')",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 2, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 2)",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 2, 0)",
    "player": {
     "id": "MainViewerVideoPlayer",
     "viewerArea": "this.MainViewer",
     "displayPlaybackBar": true,
     "class": "VideoPlayer"
    },
    "class": "VideoPlayListItem"
   }
  ],
  "id": "mainPlayList",
  "class": "PlayList"
 },
 {
  "items": [
   {
    "media": "this.media_DCBBBB79_D7E0_DCF0_41EA_07434FFD9A0A",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 0)",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerPanoramaPlayer); this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 0, 1)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.media_DCBBBB79_D7E0_DCF0_41EA_07434FFD9A0A_camera",
    "class": "Video360PlayListItem"
   },
   {
    "media": "this.media_DC76EA73_D7E0_FCF0_41DC_3D79611B72D7",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 1, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 1)",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerPanoramaPlayer); this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 1, 2)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.media_DC76EA73_D7E0_FCF0_41DC_3D79611B72D7_camera",
    "class": "Video360PlayListItem"
   },
   {
    "media": "this.video_C7896FDE_D7E0_D430_41C5_9927F73DC2B1",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 2, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 2)",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 2, 0)",
    "player": "this.MainViewerVideoPlayer",
    "class": "VideoPlayListItem"
   }
  ],
  "id": "DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist",
  "class": "PlayList"
 },
 {
  "items": [
   {
    "media": "this.media_DCBBBB79_D7E0_DCF0_41EA_07434FFD9A0A",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 0)",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerPanoramaPlayer); this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 0, 1)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.media_DCBBBB79_D7E0_DCF0_41EA_07434FFD9A0A_camera",
    "class": "Video360PlayListItem"
   },
   {
    "media": "this.media_DC76EA73_D7E0_FCF0_41DC_3D79611B72D7",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 1, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 1)",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerPanoramaPlayer); this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 1, 2)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.media_DC76EA73_D7E0_FCF0_41DC_3D79611B72D7_camera",
    "class": "Video360PlayListItem"
   },
   {
    "media": "this.video_C7896FDE_D7E0_D430_41C5_9927F73DC2B1",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 2, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 2)",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 2, 0)",
    "player": "this.MainViewerVideoPlayer",
    "class": "VideoPlayListItem"
   }
  ],
  "id": "DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist",
  "class": "PlayList"
 },
 "this.video_C7896FDE_D7E0_D430_41C5_9927F73DC2B1",
 "this.MainViewerPanoramaPlayer",
 {
  "paddingLeft": 0,
  "titleFontSize": "1.29vh",
  "veilShowEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "closeButtonPressedIconLineWidth": 5,
  "id": "window_C7BE4E61_D7E0_D410_41E3_A31B00F96705",
  "bodyPaddingBottom": 0,
  "contentOpaque": false,
  "closeButtonBackgroundOpacity": 0.3,
  "scrollBarColor": "#000000",
  "backgroundColorDirection": "vertical",
  "headerPaddingLeft": 10,
  "closeButtonRollOverBorderColor": "#000000",
  "minHeight": 20,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "closeButtonPressedBorderSize": 0,
  "modal": true,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "footerBackgroundColorDirection": "vertical",
  "titlePaddingRight": 5,
  "backgroundColor": [],
  "veilColorRatios": [
   0,
   1
  ],
  "footerHeight": 5,
  "minWidth": 20,
  "headerPaddingTop": 10,
  "paddingRight": 0,
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "headerPaddingBottom": 5,
  "closeButtonBorderRadius": 0,
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "closeButtonPaddingRight": 5,
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "closeButtonBackgroundColorDirection": "vertical",
  "headerBackgroundOpacity": 0,
  "titlePaddingLeft": 5,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "layout": "vertical",
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "bodyPaddingTop": 0,
  "titleFontFamily": "Arial",
  "borderRadius": 5,
  "shadowOpacity": 0.5,
  "shadowHorizontalLength": 3,
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "shadowVerticalLength": 0,
  "children": [
   {
    "playbackBarHeadShadowVerticalLength": 0,
    "playbackBarProgressOpacity": 1,
    "progressLeft": 0,
    "id": "viewer_uidC506DAB8_D7E0_3C70_41D3_E03882151FE4",
    "toolTipShadowOpacity": 1,
    "width": "100%",
    "playbackBarBottom": 0,
    "progressBackgroundColorDirection": "vertical",
    "playbackBarBorderSize": 0,
    "playbackBarHeadOpacity": 1,
    "playbackBarBackgroundOpacity": 1,
    "toolTipFontWeight": "normal",
    "progressBarBackgroundColorRatios": [
     0
    ],
    "toolTipOpacity": 1,
    "toolTipPaddingRight": 6,
    "progressBorderColor": "#FFFFFF",
    "minHeight": 50,
    "displayTooltipInTouchScreens": true,
    "toolTipPaddingLeft": 6,
    "toolTipShadowSpread": 0,
    "playbackBarHeadBorderSize": 0,
    "minWidth": 100,
    "height": "100%",
    "progressBarBackgroundColor": [
     "#3399FF"
    ],
    "toolTipBackgroundColor": "#F6F6F6",
    "paddingRight": 0,
    "playbackBarHeadShadowColor": "#000000",
    "toolTipDisplayTime": 600,
    "progressOpacity": 1,
    "progressBackgroundColor": [
     "#FFFFFF"
    ],
    "progressRight": 0,
    "progressBarBackgroundColorDirection": "vertical",
    "toolTipBorderSize": 1,
    "toolTipShadowHorizontalLength": 0,
    "playbackBarHeadBackgroundColor": [
     "#111111",
     "#666666"
    ],
    "playbackBarProgressBackgroundColorDirection": "vertical",
    "playbackBarBackgroundColor": [
     "#FFFFFF"
    ],
    "toolTipShadowBlurRadius": 3,
    "toolTipTextShadowColor": "#000000",
    "playbackBarHeight": 10,
    "progressBackgroundColorRatios": [
     0.01
    ],
    "playbackBarHeadWidth": 6,
    "progressBottom": 2,
    "progressHeight": 10,
    "playbackBarRight": 0,
    "playbackBarBackgroundColorDirection": "vertical",
    "playbackBarLeft": 0,
    "borderRadius": 0,
    "toolTipBorderColor": "#767676",
    "playbackBarHeadShadow": true,
    "playbackBarHeadBackgroundColorDirection": "vertical",
    "toolTipTextShadowBlurRadius": 3,
    "toolTipPaddingBottom": 4,
    "progressBackgroundOpacity": 1,
    "playbackBarHeadShadowHorizontalLength": 0,
    "transitionDuration": 500,
    "toolTipShadowVerticalLength": 0,
    "playbackBarHeadHeight": 15,
    "toolTipBorderRadius": 3,
    "shadow": false,
    "progressBarOpacity": 1,
    "playbackBarOpacity": 1,
    "toolTipFontStyle": "normal",
    "progressBorderSize": 0,
    "playbackBarProgressBackgroundColor": [
     "#3399FF"
    ],
    "progressBarBorderSize": 0,
    "toolTipPaddingTop": 4,
    "playbackBarProgressBorderSize": 0,
    "paddingTop": 0,
    "playbackBarProgressBorderRadius": 0,
    "progressBarBorderColor": "#0066FF",
    "toolTipFontSize": "1.11vh",
    "transitionMode": "blending",
    "class": "ViewerArea",
    "playbackBarHeadShadowOpacity": 0.7,
    "playbackBarBorderColor": "#FFFFFF",
    "progressBorderRadius": 0,
    "playbackBarProgressBackgroundColorRatios": [
     0
    ],
    "toolTipShadowColor": "#333333",
    "playbackBarBorderRadius": 0,
    "progressBarBorderRadius": 0,
    "toolTipFontFamily": "Arial",
    "playbackBarProgressBorderColor": "#000000",
    "toolTipTextShadowOpacity": 0,
    "propagateClick": false,
    "playbackBarHeadShadowBlurRadius": 3,
    "borderSize": 0,
    "data": {
     "name": "ViewerArea5065"
    },
    "playbackBarHeadBorderRadius": 0,
    "paddingLeft": 0,
    "playbackBarHeadBorderColor": "#000000",
    "playbackBarHeadBackgroundColorRatios": [
     0,
     1
    ],
    "paddingBottom": 0,
    "toolTipFontColor": "#606060"
   }
  ],
  "shadowBlurRadius": 6,
  "bodyPaddingRight": 0,
  "scrollBarOpacity": 0.5,
  "headerPaddingRight": 0,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "shadowColor": "#000000",
  "veilHideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  },
  "closeButtonPressedBackgroundOpacity": 0.3,
  "shadow": true,
  "titlePaddingTop": 5,
  "closeButtonIconWidth": 20,
  "backgroundColorRatios": [],
  "backgroundOpacity": 1,
  "hideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  },
  "closeButtonBorderColor": "#000000",
  "closeButtonPaddingTop": 5,
  "headerVerticalAlign": "middle",
  "footerBackgroundOpacity": 0,
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "shadowSpread": 1,
  "veilOpacity": 0.4,
  "paddingTop": 0,
  "closeButtonPaddingBottom": 5,
  "showEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "class": "Window",
  "overflow": "scroll",
  "gap": 10,
  "closeButtonRollOverIconColor": "#666666",
  "closeButtonBorderSize": 0,
  "closeButtonPressedBorderColor": "#000000",
  "closeButtonIconLineWidth": 5,
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "closeButtonRollOverIconLineWidth": 5,
  "titlePaddingBottom": 5,
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "closeButtonRollOverBorderSize": 0,
  "bodyBackgroundOpacity": 0,
  "propagateClick": false,
  "horizontalAlign": "center",
  "headerBackgroundColorDirection": "vertical",
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "bodyPaddingLeft": 0,
  "borderSize": 0,
  "closeButtonPaddingLeft": 5,
  "closeButtonIconHeight": 20,
  "paddingBottom": 0,
  "scrollBarVisible": "rollOver",
  "verticalAlign": "middle",
  "bodyBackgroundColorDirection": "vertical",
  "closeButtonIconColor": "#000000",
  "data": {
   "name": "Window4679"
  },
  "closeButtonPressedIconColor": "#888888"
 },
 {
  "items": [
   {
    "media": "this.media_DCBBBB79_D7E0_DCF0_41EA_07434FFD9A0A",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 0)",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerPanoramaPlayer); this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 0, 1)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.media_DCBBBB79_D7E0_DCF0_41EA_07434FFD9A0A_camera",
    "class": "Video360PlayListItem"
   },
   {
    "media": "this.media_DC76EA73_D7E0_FCF0_41DC_3D79611B72D7",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 1, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 1)",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerPanoramaPlayer); this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 1, 2)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.media_DC76EA73_D7E0_FCF0_41DC_3D79611B72D7_camera",
    "class": "Video360PlayListItem"
   },
   {
    "media": "this.video_C7896FDE_D7E0_D430_41C5_9927F73DC2B1",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 2, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 2)",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 2, 0)",
    "player": "this.MainViewerVideoPlayer",
    "class": "VideoPlayListItem"
   }
  ],
  "id": "DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist",
  "class": "PlayList"
 },
 "this.media_DC76EA73_D7E0_FCF0_41DC_3D79611B72D7",
 {
  "items": [
   {
    "media": "this.video_C7896FDE_D7E0_D430_41C5_9927F73DC2B1",
    "start": "this.viewer_uidC7327FBA_D7E0_5470_41E8_701E47CF23F5VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_C7021FC4_D7E0_5410_41E2_A9FFF281BC96, 0, '#000000')",
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uidC7327FBA_D7E0_5470_41E8_701E47CF23F5VideoPlayer)",
    "player": {
     "id": "viewer_uidC7327FBA_D7E0_5470_41E8_701E47CF23F5VideoPlayer",
     "viewerArea": "this.viewer_uidC506DAB8_D7E0_3C70_41D3_E03882151FE4",
     "displayPlaybackBar": true,
     "class": "VideoPlayer"
    },
    "class": "VideoPlayListItem"
   }
  ],
  "id": "PlayList_C7021FC4_D7E0_5410_41E2_A9FFF281BC96",
  "class": "PlayList"
 },
 "this.MainViewerVideoPlayer",
 {
  "items": [
   {
    "media": "this.media_DCBBBB79_D7E0_DCF0_41EA_07434FFD9A0A",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 0)",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerPanoramaPlayer); this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 0, 1)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.media_DCBBBB79_D7E0_DCF0_41EA_07434FFD9A0A_camera",
    "class": "Video360PlayListItem"
   },
   {
    "media": "this.media_DC76EA73_D7E0_FCF0_41DC_3D79611B72D7",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 1, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 1)",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerPanoramaPlayer); this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 1, 2)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.media_DC76EA73_D7E0_FCF0_41DC_3D79611B72D7_camera",
    "class": "Video360PlayListItem"
   },
   {
    "media": "this.video_C7896FDE_D7E0_D430_41C5_9927F73DC2B1",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 2, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 2)",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 2, 0)",
    "player": "this.MainViewerVideoPlayer",
    "class": "VideoPlayListItem"
   }
  ],
  "id": "DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist",
  "class": "PlayList"
 },
 {
  "items": [
   {
    "media": "this.media_DCBBBB79_D7E0_DCF0_41EA_07434FFD9A0A",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0)",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerPanoramaPlayer); this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.media_DCBBBB79_D7E0_DCF0_41EA_07434FFD9A0A_camera",
    "class": "Video360PlayListItem"
   },
   {
    "media": "this.media_DC76EA73_D7E0_FCF0_41DC_3D79611B72D7",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1)",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerPanoramaPlayer); this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.media_DC76EA73_D7E0_FCF0_41DC_3D79611B72D7_camera",
    "class": "Video360PlayListItem"
   },
   {
    "media": "this.video_C7896FDE_D7E0_D430_41C5_9927F73DC2B1",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2)",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 0)",
    "player": "this.MainViewerVideoPlayer",
    "class": "VideoPlayListItem"
   }
  ],
  "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
  "class": "PlayList"
 },
 "this.media_DC76EA73_D7E0_FCF0_41DC_3D79611B72D7_camera",
 "this.popup_C6660D83_D7E0_D410_41C7_ED8C7DC6A702",
 {
  "items": [
   {
    "media": "this.media_DCBBBB79_D7E0_DCF0_41EA_07434FFD9A0A",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 0)",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerPanoramaPlayer); this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 0, 1)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.media_DCBBBB79_D7E0_DCF0_41EA_07434FFD9A0A_camera",
    "class": "Video360PlayListItem"
   },
   {
    "media": "this.media_DC76EA73_D7E0_FCF0_41DC_3D79611B72D7",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 1, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 1)",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerPanoramaPlayer); this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 1, 2)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.media_DC76EA73_D7E0_FCF0_41DC_3D79611B72D7_camera",
    "class": "Video360PlayListItem"
   },
   {
    "media": "this.video_C7896FDE_D7E0_D430_41C5_9927F73DC2B1",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 2, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 2)",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 2, 0)",
    "player": "this.MainViewerVideoPlayer",
    "class": "VideoPlayListItem"
   }
  ],
  "id": "DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist",
  "class": "PlayList"
 },
 "this.media_DCBBBB79_D7E0_DCF0_41EA_07434FFD9A0A_camera",
 {
  "items": [
   {
    "media": "this.media_DCBBBB79_D7E0_DCF0_41EA_07434FFD9A0A",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 0)",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerPanoramaPlayer); this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 0, 1)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.media_DCBBBB79_D7E0_DCF0_41EA_07434FFD9A0A_camera",
    "class": "Video360PlayListItem"
   },
   {
    "media": "this.media_DC76EA73_D7E0_FCF0_41DC_3D79611B72D7",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 1, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 1)",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerPanoramaPlayer); this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 1, 2)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.media_DC76EA73_D7E0_FCF0_41DC_3D79611B72D7_camera",
    "class": "Video360PlayListItem"
   },
   {
    "media": "this.video_C7896FDE_D7E0_D430_41C5_9927F73DC2B1",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 2, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 2)",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 2, 0)",
    "player": "this.MainViewerVideoPlayer",
    "class": "VideoPlayListItem"
   }
  ],
  "id": "DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist",
  "class": "PlayList"
 }
], "children": [
 {
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarProgressOpacity": 1,
  "progressLeft": 0,
  "id": "MainViewer",
  "left": 0,
  "width": "100%",
  "playbackBarBottom": 5,
  "toolTipShadowOpacity": 0,
  "playbackBarBorderSize": 0,
  "playbackBarHeadOpacity": 1,
  "playbackBarBackgroundOpacity": 1,
  "toolTipFontWeight": "normal",
  "progressBackgroundColorDirection": "vertical",
  "toolTipOpacity": 0.5,
  "toolTipPaddingRight": 10,
  "progressBorderColor": "#FFFFFF",
  "progressBarBackgroundColorRatios": [
   0
  ],
  "minHeight": 50,
  "displayTooltipInTouchScreens": true,
  "toolTipPaddingLeft": 10,
  "toolTipShadowSpread": 0,
  "playbackBarHeadBorderSize": 0,
  "minWidth": 100,
  "height": "100%",
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "toolTipBackgroundColor": "#000000",
  "paddingRight": 0,
  "playbackBarHeadShadowColor": "#000000",
  "toolTipDisplayTime": 600,
  "progressOpacity": 1,
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "progressRight": 0,
  "progressBarBackgroundColorDirection": "vertical",
  "toolTipBorderSize": 1,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "toolTipShadowBlurRadius": 3,
  "toolTipTextShadowColor": "#000000",
  "playbackBarHeight": 10,
  "progressBackgroundColorRatios": [
   0.01
  ],
  "playbackBarHeadWidth": 6,
  "progressBottom": 0,
  "progressHeight": 10,
  "playbackBarRight": 0,
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarLeft": 0,
  "borderRadius": 0,
  "toolTipBorderColor": "#767676",
  "toolTipPaddingBottom": 7,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "toolTipTextShadowBlurRadius": 3,
  "playbackBarHeadShadow": true,
  "progressBackgroundOpacity": 1,
  "playbackBarHeadShadowHorizontalLength": 0,
  "transitionDuration": 500,
  "shadow": false,
  "playbackBarHeadHeight": 15,
  "toolTipBorderRadius": 3,
  "progressBarOpacity": 1,
  "playbackBarOpacity": 1,
  "toolTipFontStyle": "normal",
  "progressBorderSize": 0,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "progressBarBorderSize": 0,
  "toolTipPaddingTop": 7,
  "playbackBarProgressBorderSize": 0,
  "top": 0,
  "playbackBarProgressBorderRadius": 0,
  "progressBarBorderColor": "#0066FF",
  "toolTipFontSize": 13,
  "paddingTop": 0,
  "transitionMode": "blending",
  "class": "ViewerArea",
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarBorderColor": "#FFFFFF",
  "progressBorderRadius": 0,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "toolTipShadowColor": "#333333",
  "playbackBarBorderRadius": 0,
  "progressBarBorderRadius": 0,
  "toolTipFontFamily": "Georgia",
  "playbackBarProgressBorderColor": "#000000",
  "toolTipTextShadowOpacity": 0,
  "propagateClick": true,
  "playbackBarHeadShadowBlurRadius": 3,
  "borderSize": 0,
  "data": {
   "name": "Main Viewer"
  },
  "playbackBarHeadBorderRadius": 0,
  "paddingLeft": 0,
  "playbackBarHeadBorderColor": "#000000",
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "paddingBottom": 0,
  "toolTipFontColor": "#FFFFFF"
 },
 {
  "scrollBarOpacity": 0.5,
  "children": [
   {
    "fontFamily": "Montserrat",
    "fontColor": "#FFFFFF",
    "textShadowBlurRadius": 10,
    "id": "Label_0C5F13A8_3BA0_A6FF_41BD_E3D21CFCE151",
    "left": 0,
    "textShadowHorizontalLength": 0,
    "textShadowVerticalLength": 0,
    "width": 239,
    "verticalAlign": "top",
    "backgroundOpacity": 0,
    "shadow": false,
    "text": "LOREM",
    "minHeight": 1,
    "textShadowColor": "#000000",
    "top": 5,
    "paddingTop": 0,
    "class": "Label",
    "minWidth": 1,
    "textShadowOpacity": 1,
    "paddingRight": 0,
    "fontSize": 54,
    "horizontalAlign": "left",
    "height": 67,
    "fontStyle": "normal",
    "propagateClick": false,
    "borderSize": 0,
    "data": {
     "name": "text 1"
    },
    "paddingLeft": 0,
    "paddingBottom": 0,
    "textDecoration": "none",
    "fontWeight": "bold",
    "borderRadius": 0
   },
   {
    "fontFamily": "Montserrat",
    "fontColor": "#FFFFFF",
    "textShadowBlurRadius": 10,
    "id": "Label_0C5F23A8_3BA0_A6FF_419F_468451E37918",
    "left": 0,
    "textShadowHorizontalLength": 0,
    "textShadowVerticalLength": 0,
    "width": 236,
    "verticalAlign": "top",
    "backgroundOpacity": 0,
    "shadow": false,
    "text": "DOLOR SIT AMET",
    "minHeight": 1,
    "textShadowColor": "#000000",
    "top": 66,
    "paddingTop": 0,
    "class": "Label",
    "minWidth": 1,
    "textShadowOpacity": 1,
    "paddingRight": 0,
    "fontSize": 18,
    "horizontalAlign": "left",
    "height": 32,
    "fontStyle": "normal",
    "propagateClick": false,
    "borderSize": 0,
    "data": {
     "name": "text 2"
    },
    "paddingLeft": 0,
    "paddingBottom": 0,
    "textDecoration": "none",
    "fontWeight": "normal",
    "borderRadius": 0
   }
  ],
  "id": "Container_0C5F33A8_3BA0_A6FF_41C3_2A6652E2CE94",
  "left": 30,
  "width": 271,
  "contentOpaque": false,
  "backgroundOpacity": 0,
  "shadow": false,
  "scrollBarColor": "#000000",
  "minHeight": 1,
  "overflow": "visible",
  "paddingTop": 0,
  "bottom": 20,
  "height": 97,
  "class": "Container",
  "minWidth": 1,
  "paddingRight": 0,
  "scrollBarMargin": 2,
  "scrollBarWidth": 10,
  "gap": 10,
  "propagateClick": false,
  "horizontalAlign": "left",
  "borderSize": 0,
  "data": {
   "name": "--STICKER"
  },
  "layout": "absolute",
  "paddingLeft": 0,
  "paddingBottom": 0,
  "scrollBarVisible": "rollOver",
  "verticalAlign": "top",
  "borderRadius": 0
 },
 {
  "paddingLeft": 0,
  "children": [
   {
    "fontFamily": "Montserrat",
    "fontColor": "#FFFFFF",
    "id": "Label_0E9CEE5D_36F3_E64E_419C_5A94FA5D3CA1",
    "left": 76,
    "width": 450,
    "verticalAlign": "middle",
    "backgroundOpacity": 0,
    "shadow": false,
    "text": "COMPANY NAME",
    "minHeight": 1,
    "top": "0%",
    "paddingTop": 0,
    "class": "Label",
    "minWidth": 1,
    "paddingRight": 0,
    "fontSize": 31,
    "horizontalAlign": "left",
    "height": 60,
    "fontStyle": "normal",
    "propagateClick": false,
    "borderSize": 0,
    "data": {
     "name": "Label Company Name"
    },
    "paddingLeft": 0,
    "paddingBottom": 0,
    "textDecoration": "none",
    "fontWeight": "normal",
    "borderRadius": 0
   },
   {
    "paddingLeft": 0,
    "maxHeight": 30,
    "maxWidth": 40,
    "id": "Image_05314BAF_3AA1_A6F2_41CB_86A11240FA50",
    "left": 30,
    "width": "4.222%",
    "shadow": false,
    "url": "skin/Image_05314BAF_3AA1_A6F2_41CB_86A11240FA50.png",
    "backgroundOpacity": 0,
    "minHeight": 1,
    "paddingTop": 0,
    "bottom": "0%",
    "top": "0%",
    "class": "Image",
    "minWidth": 1,
    "paddingRight": 0,
    "horizontalAlign": "center",
    "propagateClick": false,
    "borderSize": 0,
    "data": {
     "name": "logo"
    },
    "paddingBottom": 0,
    "scaleMode": "fit_inside",
    "verticalAlign": "middle",
    "borderRadius": 0
   },
   {
    "scrollBarOpacity": 0.5,
    "children": [
     {
      "rollOverBackgroundColor": [
       "#CE6700"
      ],
      "paddingLeft": 15,
      "fontFamily": "Montserrat",
      "playList": "this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist",
      "fontColor": "#FFFFFF",
      "popUpBorderRadius": 0,
      "id": "DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29",
      "width": 116,
      "popUpBackgroundColor": "#F7931E",
      "arrowColor": "#FFFFFF",
      "popUpPaddingBottom": 10,
      "backgroundOpacity": 1,
      "arrowBeforeLabel": false,
      "popUpGap": 2,
      "backgroundColorRatios": [
       0
      ],
      "shadow": false,
      "popUpPaddingTop": 10,
      "backgroundColorDirection": "vertical",
      "minHeight": 1,
      "popUpFontColor": "#FFFFFF",
      "rollOverPopUpBackgroundColor": "#CE6700",
      "paddingTop": 0,
      "popUpShadowColor": "#000000",
      "height": 60,
      "class": "DropDown",
      "minWidth": 1,
      "backgroundColor": [
       "#F7931E"
      ],
      "pressedBackgroundColor": [
       "#CE6700"
      ],
      "paddingRight": 15,
      "label": "RECEPTION",
      "fontSize": 12,
      "popUpPaddingLeft": 15,
      "rollOverBackgroundColorRatios": [
       0
      ],
      "selectedPopUpBackgroundColor": "#CE6700",
      "popUpShadow": false,
      "fontStyle": "normal",
      "propagateClick": false,
      "popUpShadowSpread": 1,
      "borderSize": 0,
      "data": {
       "name": "DropDown 1"
      },
      "pressedBackgroundColorRatios": [
       0
      ],
      "popUpShadowOpacity": 0,
      "gap": 0,
      "paddingBottom": 0,
      "popUpShadowBlurRadius": 6,
      "popUpBackgroundOpacity": 1,
      "textDecoration": "none",
      "fontWeight": "bold",
      "borderRadius": 0
     },
     {
      "rollOverBackgroundColor": [
       "#CE6700"
      ],
      "paddingLeft": 15,
      "fontFamily": "Montserrat",
      "playList": "this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist",
      "fontColor": "#FFFFFF",
      "popUpBorderRadius": 5,
      "id": "DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312",
      "width": 96,
      "popUpBackgroundColor": "#F7931E",
      "arrowColor": "#FFFFFF",
      "popUpPaddingBottom": 10,
      "backgroundOpacity": 1,
      "arrowBeforeLabel": false,
      "popUpGap": 2,
      "backgroundColorRatios": [
       0
      ],
      "shadow": false,
      "popUpPaddingTop": 10,
      "backgroundColorDirection": "vertical",
      "minHeight": 1,
      "popUpFontColor": "#FFFFFF",
      "rollOverPopUpBackgroundColor": "#CE6700",
      "paddingTop": 0,
      "popUpShadowColor": "#000000",
      "height": "100%",
      "backgroundColor": [
       "#F7931E"
      ],
      "class": "DropDown",
      "minWidth": 1,
      "pressedBackgroundColor": [
       "#CE6700"
      ],
      "paddingRight": 15,
      "label": "ROOMS",
      "fontSize": 12,
      "popUpPaddingLeft": 15,
      "rollOverBackgroundColorRatios": [
       0
      ],
      "selectedPopUpBackgroundColor": "#CE6700",
      "popUpShadow": false,
      "fontStyle": "normal",
      "propagateClick": false,
      "popUpShadowSpread": 1,
      "borderSize": 0,
      "data": {
       "name": "DropDown 2"
      },
      "pressedBackgroundColorRatios": [
       0
      ],
      "popUpShadowOpacity": 0,
      "gap": 0,
      "paddingBottom": 0,
      "popUpShadowBlurRadius": 6,
      "popUpBackgroundOpacity": 1,
      "textDecoration": "none",
      "fontWeight": "bold",
      "borderRadius": 0
     },
     {
      "rollOverBackgroundColor": [
       "#CE6700"
      ],
      "paddingLeft": 15,
      "fontFamily": "Montserrat",
      "playList": "this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist",
      "fontColor": "#FFFFFF",
      "popUpBorderRadius": 0,
      "id": "DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B",
      "width": 114,
      "popUpBackgroundColor": "#F7931E",
      "arrowColor": "#FFFFFF",
      "popUpPaddingBottom": 10,
      "backgroundOpacity": 1,
      "arrowBeforeLabel": false,
      "popUpGap": 2,
      "backgroundColorRatios": [
       0
      ],
      "shadow": false,
      "popUpPaddingTop": 10,
      "backgroundColorDirection": "vertical",
      "minHeight": 1,
      "popUpFontColor": "#FFFFFF",
      "rollOverPopUpBackgroundColor": "#CE6700",
      "paddingTop": 0,
      "popUpShadowColor": "#000000",
      "height": 60,
      "class": "DropDown",
      "minWidth": 1,
      "backgroundColor": [
       "#F7931E"
      ],
      "pressedBackgroundColor": [
       "#CE6700"
      ],
      "paddingRight": 15,
      "label": "AMENITIES",
      "fontSize": 12,
      "popUpPaddingLeft": 15,
      "rollOverBackgroundColorRatios": [
       0
      ],
      "selectedPopUpBackgroundColor": "#CE6700",
      "popUpShadow": false,
      "fontStyle": "normal",
      "propagateClick": false,
      "popUpShadowSpread": 1,
      "borderSize": 0,
      "data": {
       "name": "DropDown 3"
      },
      "pressedBackgroundColorRatios": [
       0
      ],
      "popUpShadowOpacity": 0,
      "gap": 0,
      "paddingBottom": 0,
      "popUpShadowBlurRadius": 6,
      "popUpBackgroundOpacity": 1,
      "textDecoration": "none",
      "fontWeight": "bold",
      "borderRadius": 0
     },
     {
      "rollOverBackgroundColor": [
       "#CE6700"
      ],
      "paddingLeft": 15,
      "fontFamily": "Montserrat",
      "playList": "this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist",
      "fontColor": "#FFFFFF",
      "popUpBorderRadius": 0,
      "id": "DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7",
      "width": 130,
      "popUpBackgroundColor": "#F7931E",
      "arrowColor": "#FFFFFF",
      "popUpPaddingBottom": 10,
      "backgroundOpacity": 1,
      "arrowBeforeLabel": false,
      "popUpGap": 2,
      "backgroundColorRatios": [
       0
      ],
      "shadow": false,
      "popUpPaddingTop": 10,
      "backgroundColorDirection": "vertical",
      "minHeight": 1,
      "popUpFontColor": "#FFFFFF",
      "rollOverPopUpBackgroundColor": "#CE6700",
      "paddingTop": 0,
      "popUpShadowColor": "#000000",
      "height": 60,
      "class": "DropDown",
      "minWidth": 1,
      "backgroundColor": [
       "#F7931E"
      ],
      "pressedBackgroundColor": [
       "#CE6700"
      ],
      "paddingRight": 15,
      "label": "SPORTS AREA",
      "fontSize": 12,
      "popUpPaddingLeft": 15,
      "rollOverBackgroundColorRatios": [
       0
      ],
      "selectedPopUpBackgroundColor": "#CE6700",
      "popUpShadow": false,
      "fontStyle": "normal",
      "propagateClick": false,
      "popUpShadowSpread": 1,
      "borderSize": 0,
      "data": {
       "name": "DropDown 4"
      },
      "pressedBackgroundColorRatios": [
       0
      ],
      "popUpShadowOpacity": 0,
      "gap": 0,
      "paddingBottom": 0,
      "popUpShadowBlurRadius": 6,
      "popUpBackgroundOpacity": 1,
      "textDecoration": "none",
      "fontWeight": "bold",
      "borderRadius": 0
     },
     {
      "rollOverBackgroundColor": [
       "#CE6700"
      ],
      "paddingLeft": 15,
      "fontFamily": "Montserrat",
      "playList": "this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist",
      "fontColor": "#FFFFFF",
      "popUpBorderRadius": 0,
      "id": "DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09",
      "width": 152,
      "popUpBackgroundColor": "#F7931E",
      "arrowColor": "#FFFFFF",
      "popUpPaddingBottom": 10,
      "backgroundOpacity": 1,
      "arrowBeforeLabel": false,
      "popUpGap": 2,
      "backgroundColorRatios": [
       0
      ],
      "shadow": false,
      "popUpPaddingTop": 10,
      "backgroundColorDirection": "vertical",
      "minHeight": 1,
      "popUpFontColor": "#FFFFFF",
      "rollOverPopUpBackgroundColor": "#CE6700",
      "paddingTop": 0,
      "popUpShadowColor": "#000000",
      "height": 60,
      "class": "DropDown",
      "minWidth": 1,
      "backgroundColor": [
       "#F7931E"
      ],
      "pressedBackgroundColor": [
       "#CE6700"
      ],
      "paddingRight": 15,
      "label": "SWIMMING POOL",
      "fontSize": 12,
      "popUpPaddingLeft": 15,
      "rollOverBackgroundColorRatios": [
       0.01
      ],
      "selectedPopUpBackgroundColor": "#CE6700",
      "popUpShadow": false,
      "fontStyle": "normal",
      "propagateClick": false,
      "popUpShadowSpread": 1,
      "borderSize": 0,
      "data": {
       "name": "DropDown 5"
      },
      "pressedBackgroundColorRatios": [
       0
      ],
      "popUpShadowOpacity": 0,
      "gap": 0,
      "paddingBottom": 0,
      "popUpShadowBlurRadius": 6,
      "popUpBackgroundOpacity": 1,
      "textDecoration": "none",
      "fontWeight": "bold",
      "borderRadius": 0
     },
     {
      "rollOverBackgroundColor": [
       "#CE6700"
      ],
      "paddingLeft": 15,
      "fontFamily": "Montserrat",
      "playList": "this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist",
      "fontColor": "#FFFFFF",
      "popUpBorderRadius": 0,
      "id": "DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE",
      "width": 136,
      "popUpBackgroundColor": "#F7931E",
      "arrowColor": "#FFFFFF",
      "popUpPaddingBottom": 10,
      "backgroundOpacity": 1,
      "arrowBeforeLabel": false,
      "popUpGap": 2,
      "backgroundColorRatios": [
       0
      ],
      "shadow": false,
      "popUpPaddingTop": 10,
      "backgroundColorDirection": "vertical",
      "minHeight": 1,
      "popUpFontColor": "#FFFFFF",
      "rollOverPopUpBackgroundColor": "#CE6700",
      "paddingTop": 0,
      "popUpShadowColor": "#000000",
      "height": 60,
      "class": "DropDown",
      "minWidth": 1,
      "backgroundColor": [
       "#F7931E"
      ],
      "pressedBackgroundColor": [
       "#CE6700"
      ],
      "paddingRight": 15,
      "label": "RESTAURANTS",
      "fontSize": 12,
      "popUpPaddingLeft": 15,
      "rollOverBackgroundColorRatios": [
       0
      ],
      "selectedPopUpBackgroundColor": "#CE6700",
      "popUpShadow": false,
      "fontStyle": "normal",
      "propagateClick": false,
      "popUpShadowSpread": 1,
      "borderSize": 0,
      "data": {
       "name": "DropDown 6"
      },
      "pressedBackgroundColorRatios": [
       0
      ],
      "popUpShadowOpacity": 0,
      "gap": 0,
      "paddingBottom": 0,
      "popUpShadowBlurRadius": 6,
      "popUpBackgroundOpacity": 1,
      "textDecoration": "none",
      "fontWeight": "bold",
      "borderRadius": 0
     },
     {
      "textDecoration": "none",
      "paddingLeft": 0,
      "fontFamily": "Arial",
      "fontColor": "#FFFFFF",
      "shadowBlurRadius": 6,
      "id": "Button_4CC5476E_5ABB_CC4E_41D1_A04ABE17DA89",
      "width": 60,
      "shadowColor": "#000000",
      "iconURL": "skin/Button_4CC5476E_5ABB_CC4E_41D1_A04ABE17DA89.png",
      "iconWidth": 17,
      "backgroundOpacity": 1,
      "backgroundColorRatios": [
       0
      ],
      "shadow": false,
      "rollOverBackgroundColorRatios": [
       0
      ],
      "backgroundColorDirection": "vertical",
      "minHeight": 1,
      "borderColor": "#000000",
      "shadowSpread": 1,
      "paddingTop": 0,
      "iconBeforeLabel": true,
      "pressedIconURL": "skin/Button_4CC5476E_5ABB_CC4E_41D1_A04ABE17DA89_pressed.png",
      "height": 60,
      "class": "Button",
      "minWidth": 1,
      "mode": "toggle",
      "backgroundColor": [
       "#F7931E"
      ],
      "paddingRight": 0,
      "fontSize": 12,
      "click": "if(!this.Container_0A760F11_3BA1_BFAE_41CD_32268FCAF8B4.get('visible')){ this.setComponentVisibility(this.Container_0A760F11_3BA1_BFAE_41CD_32268FCAF8B4, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_0A760F11_3BA1_BFAE_41CD_32268FCAF8B4, false, 0, null, null, false) }",
      "horizontalAlign": "center",
      "rollOverBackgroundOpacity": 1,
      "fontStyle": "normal",
      "propagateClick": false,
      "iconHeight": 17,
      "borderSize": 0,
      "data": {
       "name": "Button Settings"
      },
      "rollOverBackgroundColor": [
       "#CE6700"
      ],
      "gap": 5,
      "paddingBottom": 0,
      "verticalAlign": "middle",
      "layout": "horizontal",
      "cursor": "hand",
      "fontWeight": "normal",
      "borderRadius": 0
     }
    ],
    "id": "Container_0542AAAA_3AA3_A6F3_41B2_0E208ADBBBE1",
    "width": 1199,
    "contentOpaque": false,
    "right": "0%",
    "backgroundOpacity": 0,
    "shadow": false,
    "scrollBarColor": "#000000",
    "minHeight": 1,
    "overflow": "scroll",
    "top": "0%",
    "paddingTop": 0,
    "class": "Container",
    "minWidth": 1,
    "paddingRight": 15,
    "scrollBarMargin": 2,
    "height": 60,
    "scrollBarWidth": 10,
    "gap": 3,
    "propagateClick": true,
    "horizontalAlign": "right",
    "borderSize": 0,
    "data": {
     "name": "-button set container"
    },
    "layout": "horizontal",
    "paddingLeft": 0,
    "paddingBottom": 0,
    "scrollBarVisible": "rollOver",
    "verticalAlign": "middle",
    "borderRadius": 0
   }
  ],
  "id": "Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
  "left": "0%",
  "contentOpaque": false,
  "scrollBarOpacity": 0.5,
  "right": "0%",
  "shadow": false,
  "backgroundColorRatios": [
   0
  ],
  "scrollBarColor": "#000000",
  "backgroundColorDirection": "vertical",
  "backgroundOpacity": 1,
  "minHeight": 1,
  "overflow": "visible",
  "top": 0,
  "backgroundColor": [
   "#F7931E"
  ],
  "class": "Container",
  "minWidth": 1,
  "height": 60,
  "paddingTop": 0,
  "paddingRight": 0,
  "scrollBarMargin": 2,
  "scrollBarWidth": 10,
  "gap": 10,
  "propagateClick": true,
  "horizontalAlign": "left",
  "borderSize": 0,
  "data": {
   "name": "--BUTTON SET"
  },
  "layout": "absolute",
  "paddingBottom": 0,
  "scrollBarVisible": "rollOver",
  "verticalAlign": "top",
  "borderRadius": 0
 },
 {
  "paddingLeft": 0,
  "children": [
   "this.Button_4D1C404A_5A87_C3B6_41BC_63B811C40CD0",
   "this.Button_485BFF41_598E_3DB2_41A9_33F36E014467",
   {
    "textDecoration": "none",
    "paddingLeft": 0,
    "fontFamily": "Arial",
    "fontColor": "#FFFFFF",
    "shadowBlurRadius": 6,
    "id": "Button_4C5C0864_5A8E_C472_41C4_7C0748488A41",
    "width": 60,
    "shadowColor": "#000000",
    "iconURL": "skin/Button_4C5C0864_5A8E_C472_41C4_7C0748488A41.png",
    "iconWidth": 30,
    "backgroundOpacity": 1,
    "pressedIconHeight": 30,
    "backgroundColorRatios": [
     0
    ],
    "shadow": false,
    "rollOverBackgroundColorRatios": [
     0
    ],
    "backgroundColorDirection": "vertical",
    "minHeight": 1,
    "borderColor": "#000000",
    "shadowSpread": 1,
    "paddingTop": 0,
    "iconBeforeLabel": true,
    "pressedIconURL": "skin/Button_4C5C0864_5A8E_C472_41C4_7C0748488A41_pressed.png",
    "pressedIconWidth": 30,
    "height": 60,
    "class": "Button",
    "minWidth": 1,
    "mode": "toggle",
    "backgroundColor": [
     "#F7931E"
    ],
    "paddingRight": 0,
    "pressedRollOverBackgroundColor": [
     "#CE6700"
    ],
    "fontSize": 12,
    "pressedRollOverBackgroundColorRatios": [
     0
    ],
    "horizontalAlign": "center",
    "rollOverBackgroundOpacity": 1,
    "fontStyle": "normal",
    "propagateClick": false,
    "iconHeight": 30,
    "borderSize": 0,
    "data": {
     "name": "Button Settings Mute"
    },
    "rollOverBackgroundColor": [
     "#CE6700"
    ],
    "gap": 5,
    "paddingBottom": 0,
    "verticalAlign": "middle",
    "layout": "horizontal",
    "cursor": "hand",
    "fontWeight": "normal",
    "borderRadius": 0
   },
   "this.Button_4DE935B8_5A86_4CD2_41A9_D487E3DF3FBA",
   {
    "textDecoration": "none",
    "paddingLeft": 0,
    "fontFamily": "Arial",
    "fontColor": "#FFFFFF",
    "shadowBlurRadius": 6,
    "id": "Button_4CF1FD24_5A86_3DF2_41B3_7CDBA2E3D44A",
    "width": 60,
    "shadowColor": "#000000",
    "iconURL": "skin/Button_4CF1FD24_5A86_3DF2_41B3_7CDBA2E3D44A.png",
    "iconWidth": 30,
    "backgroundOpacity": 1,
    "pressedIconHeight": 30,
    "backgroundColorRatios": [
     0
    ],
    "shadow": false,
    "rollOverBackgroundColorRatios": [
     0
    ],
    "backgroundColorDirection": "vertical",
    "minHeight": 1,
    "borderColor": "#000000",
    "shadowSpread": 1,
    "paddingTop": 0,
    "iconBeforeLabel": true,
    "pressedIconURL": "skin/Button_4CF1FD24_5A86_3DF2_41B3_7CDBA2E3D44A_pressed.png",
    "pressedIconWidth": 30,
    "height": 60,
    "class": "Button",
    "minWidth": 1,
    "mode": "toggle",
    "backgroundColor": [
     "#F7931E"
    ],
    "paddingRight": 0,
    "pressedRollOverBackgroundColor": [
     "#CE6700"
    ],
    "fontSize": 12,
    "pressedRollOverBackgroundColorRatios": [
     0
    ],
    "horizontalAlign": "center",
    "rollOverBackgroundOpacity": 1,
    "fontStyle": "normal",
    "propagateClick": false,
    "iconHeight": 30,
    "borderSize": 0,
    "data": {
     "name": "Button Settings Fullscreen"
    },
    "rollOverBackgroundColor": [
     "#CE6700"
    ],
    "gap": 5,
    "paddingBottom": 0,
    "verticalAlign": "middle",
    "layout": "horizontal",
    "cursor": "hand",
    "fontWeight": "normal",
    "borderRadius": 0
   }
  ],
  "id": "Container_0A760F11_3BA1_BFAE_41CD_32268FCAF8B4",
  "width": 60,
  "contentOpaque": false,
  "scrollBarOpacity": 0.5,
  "right": 15,
  "shadow": false,
  "backgroundColorRatios": [
   0.02
  ],
  "scrollBarColor": "#000000",
  "backgroundColorDirection": "vertical",
  "backgroundOpacity": 1,
  "minHeight": 1,
  "overflow": "scroll",
  "top": 62,
  "backgroundColor": [
   "#F7931E"
  ],
  "class": "Container",
  "minWidth": 1,
  "height": 300,
  "paddingTop": 0,
  "paddingRight": 0,
  "scrollBarMargin": 2,
  "scrollBarWidth": 10,
  "gap": 0,
  "propagateClick": false,
  "horizontalAlign": "center",
  "borderSize": 0,
  "data": {
   "name": "-button set"
  },
  "layout": "vertical",
  "visible": false,
  "paddingBottom": 0,
  "scrollBarVisible": "rollOver",
  "verticalAlign": "middle",
  "borderRadius": 0
 },
 {
  "scrollBarOpacity": 0.5,
  "children": [
   {
    "maxHeight": 101,
    "maxWidth": 101,
    "id": "IconButton_7B212C50_3AA0_A1AF_41C5_F659ED22BD52",
    "width": 44,
    "iconURL": "skin/IconButton_7B212C50_3AA0_A1AF_41C5_F659ED22BD52.png",
    "backgroundOpacity": 0,
    "shadow": false,
    "transparencyActive": true,
    "minHeight": 1,
    "paddingTop": 0,
    "height": 44,
    "class": "IconButton",
    "minWidth": 1,
    "mode": "push",
    "paddingRight": 0,
    "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, true, 0, null, null, false)",
    "horizontalAlign": "center",
    "propagateClick": false,
    "borderSize": 0,
    "data": {
     "name": "IconButton Info"
    },
    "rollOverIconURL": "skin/IconButton_7B212C50_3AA0_A1AF_41C5_F659ED22BD52_rollover.png",
    "paddingLeft": 0,
    "paddingBottom": 0,
    "verticalAlign": "middle",
    "cursor": "hand",
    "borderRadius": 0
   },
   {
    "maxHeight": 101,
    "maxWidth": 101,
    "id": "IconButton_7B21DC51_3AA0_A251_41B1_CEAABC2475F8",
    "width": 44,
    "iconURL": "skin/IconButton_7B21DC51_3AA0_A251_41B1_CEAABC2475F8.png",
    "backgroundOpacity": 0,
    "shadow": false,
    "transparencyActive": true,
    "minHeight": 1,
    "paddingTop": 0,
    "height": 44,
    "class": "IconButton",
    "minWidth": 1,
    "mode": "push",
    "paddingRight": 0,
    "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, true, 0, null, null, false)",
    "horizontalAlign": "center",
    "propagateClick": false,
    "borderSize": 0,
    "data": {
     "name": "IconButton Thumblist"
    },
    "rollOverIconURL": "skin/IconButton_7B21DC51_3AA0_A251_41B1_CEAABC2475F8_rollover.png",
    "paddingLeft": 0,
    "paddingBottom": 0,
    "verticalAlign": "middle",
    "cursor": "hand",
    "borderRadius": 0
   },
   {
    "maxHeight": 101,
    "maxWidth": 101,
    "id": "IconButton_7B21CC51_3AA0_A251_41C9_1ABF5F74EDA0",
    "width": 44,
    "iconURL": "skin/IconButton_7B21CC51_3AA0_A251_41C9_1ABF5F74EDA0.png",
    "backgroundOpacity": 0,
    "shadow": false,
    "transparencyActive": true,
    "minHeight": 1,
    "paddingTop": 0,
    "height": 44,
    "class": "IconButton",
    "minWidth": 1,
    "mode": "push",
    "paddingRight": 0,
    "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, true, 0, null, null, false)",
    "horizontalAlign": "center",
    "propagateClick": false,
    "borderSize": 0,
    "data": {
     "name": "IconButton Location"
    },
    "rollOverIconURL": "skin/IconButton_7B21CC51_3AA0_A251_41C9_1ABF5F74EDA0_rollover.png",
    "paddingLeft": 0,
    "paddingBottom": 0,
    "verticalAlign": "middle",
    "cursor": "hand",
    "borderRadius": 0
   },
   {
    "maxHeight": 101,
    "maxWidth": 101,
    "id": "IconButton_7B21FC51_3AA0_A251_41CC_46CDE74591EA",
    "width": 44,
    "iconURL": "skin/IconButton_7B21FC51_3AA0_A251_41CC_46CDE74591EA.png",
    "backgroundOpacity": 0,
    "shadow": false,
    "transparencyActive": true,
    "minHeight": 1,
    "paddingTop": 0,
    "height": 44,
    "class": "IconButton",
    "minWidth": 1,
    "mode": "push",
    "paddingRight": 0,
    "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, true, 0, null, null, false)",
    "horizontalAlign": "center",
    "propagateClick": false,
    "borderSize": 0,
    "data": {
     "name": "IconButton Photoalbum"
    },
    "rollOverIconURL": "skin/IconButton_7B21FC51_3AA0_A251_41CC_46CDE74591EA_rollover.png",
    "paddingLeft": 0,
    "paddingBottom": 0,
    "verticalAlign": "middle",
    "cursor": "hand",
    "borderRadius": 0
   },
   {
    "maxHeight": 101,
    "maxWidth": 101,
    "id": "IconButton_7B206C51_3AA0_A251_41A3_B3DB657BC52B",
    "width": 44,
    "iconURL": "skin/IconButton_7B206C51_3AA0_A251_41A3_B3DB657BC52B.png",
    "backgroundOpacity": 0,
    "shadow": false,
    "transparencyActive": true,
    "minHeight": 1,
    "paddingTop": 0,
    "height": 44,
    "class": "IconButton",
    "minWidth": 1,
    "mode": "push",
    "paddingRight": 0,
    "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, true, 0, null, null, false)",
    "horizontalAlign": "center",
    "propagateClick": false,
    "borderSize": 0,
    "data": {
     "name": "IconButton Floorplan"
    },
    "rollOverIconURL": "skin/IconButton_7B206C51_3AA0_A251_41A3_B3DB657BC52B_rollover.png",
    "paddingLeft": 0,
    "paddingBottom": 0,
    "verticalAlign": "middle",
    "cursor": "hand",
    "borderRadius": 0
   },
   {
    "maxHeight": 101,
    "maxWidth": 101,
    "id": "IconButton_7B201C51_3AA0_A251_41CD_5CC0A59F2DE8",
    "width": 44,
    "iconURL": "skin/IconButton_7B201C51_3AA0_A251_41CD_5CC0A59F2DE8.png",
    "backgroundOpacity": 0,
    "shadow": false,
    "transparencyActive": true,
    "minHeight": 1,
    "paddingTop": 0,
    "pressedIconURL": "skin/IconButton_7B201C51_3AA0_A251_41CD_5CC0A59F2DE8_pressed.png",
    "height": 44,
    "class": "IconButton",
    "minWidth": 1,
    "mode": "push",
    "paddingRight": 0,
    "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, true, 0, null, null, false)",
    "horizontalAlign": "center",
    "propagateClick": false,
    "borderSize": 0,
    "data": {
     "name": "IconButton Realtor"
    },
    "rollOverIconURL": "skin/IconButton_7B201C51_3AA0_A251_41CD_5CC0A59F2DE8_rollover.png",
    "paddingLeft": 0,
    "paddingBottom": 0,
    "verticalAlign": "middle",
    "cursor": "hand",
    "borderRadius": 0
   },
   {
    "maxHeight": 101,
    "maxWidth": 101,
    "id": "IconButton_7B200C51_3AA0_A251_41CC_7E57609B3C93",
    "width": 44,
    "iconURL": "skin/IconButton_7B200C51_3AA0_A251_41CC_7E57609B3C93.png",
    "backgroundOpacity": 0,
    "shadow": false,
    "transparencyActive": true,
    "minHeight": 1,
    "paddingTop": 0,
    "height": 44,
    "class": "IconButton",
    "minWidth": 1,
    "mode": "push",
    "paddingRight": 0,
    "horizontalAlign": "center",
    "propagateClick": false,
    "borderSize": 0,
    "data": {
     "name": "IconButton Video"
    },
    "rollOverIconURL": "skin/IconButton_7B200C51_3AA0_A251_41CC_7E57609B3C93_rollover.png",
    "paddingLeft": 0,
    "paddingBottom": 0,
    "verticalAlign": "middle",
    "cursor": "hand",
    "borderRadius": 0
   }
  ],
  "id": "Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
  "left": "0%",
  "width": "100%",
  "contentOpaque": false,
  "backgroundOpacity": 0,
  "shadow": false,
  "scrollBarColor": "#000000",
  "minHeight": 1,
  "overflow": "scroll",
  "paddingTop": 0,
  "bottom": "0%",
  "height": 90,
  "class": "Container",
  "minWidth": 1,
  "paddingRight": 30,
  "scrollBarMargin": 2,
  "scrollBarWidth": 10,
  "gap": 3,
  "propagateClick": true,
  "horizontalAlign": "right",
  "borderSize": 0,
  "data": {
   "name": "-button set container"
  },
  "layout": "horizontal",
  "paddingLeft": 0,
  "paddingBottom": 0,
  "scrollBarVisible": "rollOver",
  "verticalAlign": "middle",
  "borderRadius": 0
 },
 {
  "paddingLeft": 0,
  "children": [
   {
    "paddingLeft": 0,
    "children": [
     {
      "paddingLeft": 0,
      "children": [
       {
        "paddingLeft": 0,
        "maxHeight": 1000,
        "maxWidth": 2000,
        "id": "Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A",
        "left": "0%",
        "width": "100%",
        "backgroundOpacity": 0,
        "shadow": false,
        "url": "skin/Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A.jpg",
        "minHeight": 1,
        "paddingTop": 0,
        "top": "0%",
        "class": "Image",
        "minWidth": 1,
        "paddingRight": 0,
        "horizontalAlign": "center",
        "height": "100%",
        "propagateClick": false,
        "borderSize": 0,
        "data": {
         "name": "photo"
        },
        "paddingBottom": 0,
        "scaleMode": "fit_outside",
        "verticalAlign": "middle",
        "borderRadius": 0
       }
      ],
      "id": "Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
      "width": "85%",
      "contentOpaque": false,
      "scrollBarOpacity": 0.5,
      "backgroundOpacity": 1,
      "backgroundColorRatios": [
       0
      ],
      "shadow": false,
      "scrollBarColor": "#000000",
      "backgroundColorDirection": "vertical",
      "minHeight": 1,
      "overflow": "scroll",
      "paddingTop": 0,
      "backgroundColor": [
       "#000000"
      ],
      "class": "Container",
      "minWidth": 1,
      "paddingRight": 0,
      "scrollBarMargin": 2,
      "height": "100%",
      "scrollBarWidth": 10,
      "gap": 10,
      "propagateClick": false,
      "horizontalAlign": "center",
      "borderSize": 0,
      "data": {
       "name": "-left"
      },
      "layout": "absolute",
      "paddingBottom": 0,
      "scrollBarVisible": "rollOver",
      "verticalAlign": "middle",
      "borderRadius": 0
     },
     {
      "paddingLeft": 0,
      "id": "Container_26D3A42C_3F86_BA30_419B_2C6BE84D2718",
      "width": 8,
      "contentOpaque": false,
      "scrollBarOpacity": 0.5,
      "backgroundOpacity": 1,
      "backgroundColorRatios": [
       0
      ],
      "shadow": false,
      "scrollBarColor": "#000000",
      "backgroundColorDirection": "vertical",
      "minHeight": 1,
      "overflow": "scroll",
      "paddingTop": 0,
      "backgroundColor": [
       "#F7931E"
      ],
      "class": "Container",
      "minWidth": 1,
      "paddingRight": 0,
      "scrollBarMargin": 2,
      "height": "100%",
      "scrollBarWidth": 10,
      "gap": 10,
      "propagateClick": false,
      "horizontalAlign": "left",
      "borderSize": 0,
      "data": {
       "name": "orange line"
      },
      "layout": "absolute",
      "paddingBottom": 0,
      "scrollBarVisible": "rollOver",
      "verticalAlign": "top",
      "borderRadius": 0
     },
     {
      "paddingLeft": 50,
      "children": [
       {
        "paddingLeft": 0,
        "id": "Container_062A3830_1140_E215_4195_1698933FE51C",
        "width": "100%",
        "contentOpaque": false,
        "scrollBarOpacity": 0.5,
        "backgroundOpacity": 0.3,
        "backgroundColorRatios": [
         0,
         1
        ],
        "shadow": false,
        "scrollBarColor": "#000000",
        "backgroundColorDirection": "vertical",
        "minHeight": 0,
        "overflow": "scroll",
        "paddingTop": 20,
        "height": 60,
        "class": "Container",
        "minWidth": 1,
        "backgroundColor": [
         "#FFFFFF",
         "#FFFFFF"
        ],
        "paddingRight": 0,
        "scrollBarMargin": 2,
        "scrollBarWidth": 10,
        "gap": 0,
        "propagateClick": false,
        "horizontalAlign": "right",
        "borderSize": 0,
        "data": {
         "name": "Container space"
        },
        "layout": "horizontal",
        "paddingBottom": 0,
        "scrollBarVisible": "rollOver",
        "verticalAlign": "top",
        "borderRadius": 0
       },
       {
        "paddingLeft": 0,
        "children": [
         {
          "scrollBarOpacity": 0.5,
          "id": "HTMLText_062AD830_1140_E215_41B0_321699661E7F",
          "width": "100%",
          "shadow": false,
          "scrollBarColor": "#F7931E",
          "backgroundOpacity": 0,
          "minHeight": 1,
          "paddingTop": 0,
          "height": "100%",
          "class": "HTMLText",
          "minWidth": 1,
          "paddingRight": 10,
          "scrollBarMargin": 2,
          "scrollBarWidth": 10,
          "propagateClick": false,
          "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#f7931e;font-size:7.61vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.7vh;font-family:'Montserrat';\"><B>LOREM IPSUM</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.7vh;font-family:'Montserrat';\"><B>DOLOR SIT AMET</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.96vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.2vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#f7931e;font-size:1.96vh;font-family:'Montserrat';\"><B>CONSECTETUR ADIPISCING ELIT. MORBI BIBENDUM PHARETRA LOREM, ACCUMSAN SAN NULLA.</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.2vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.2vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.2vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.2vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.2vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV><p STYLE=\"margin:0; line-height:1.2vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.2vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.2vh;font-family:Arial, Helvetica, sans-serif;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></DIV><p STYLE=\"margin:0; line-height:1.96vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.2vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.96vh;font-family:'Montserrat';\"><B>DONEC FEUGIAT:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.2vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.74vh;\"> </SPAN>\u2022 Nisl nec mi sollicitudin facilisis </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.2vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Nam sed faucibus est.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.2vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Ut eget lorem sed leo.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.2vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.2vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></DIV><p STYLE=\"margin:0; line-height:1.96vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.2vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.96vh;font-family:'Montserrat';\"><B>LOREM IPSUM:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#f7931e;font-size:2.83vh;font-family:'Oswald';\"><B>$150,000</B></SPAN></SPAN></DIV></div>",
          "borderSize": 0,
          "data": {
           "name": "HTMLText"
          },
          "paddingLeft": 10,
          "paddingBottom": 20,
          "scrollBarVisible": "rollOver",
          "borderRadius": 0
         },
         {
          "textDecoration": "none",
          "paddingLeft": 0,
          "fontFamily": "Montserrat",
          "fontColor": "#FFFFFF",
          "shadowBlurRadius": 6,
          "id": "Button_062AF830_1140_E215_418D_D2FC11B12C47",
          "width": 180,
          "shadowColor": "#000000",
          "iconWidth": 32,
          "backgroundOpacity": 0.8,
          "backgroundColorRatios": [
           0
          ],
          "shadow": false,
          "backgroundColorDirection": "vertical",
          "minHeight": 1,
          "borderColor": "#000000",
          "shadowSpread": 1,
          "paddingTop": 0,
          "iconBeforeLabel": true,
          "height": 50,
          "class": "Button",
          "minWidth": 1,
          "mode": "push",
          "backgroundColor": [
           "#F7931E"
          ],
          "pressedBackgroundColor": [
           "#000000"
          ],
          "paddingRight": 0,
          "label": "LOREM IPSUM",
          "fontSize": "1.96vh",
          "horizontalAlign": "center",
          "rollOverBackgroundOpacity": 1,
          "fontStyle": "normal",
          "propagateClick": false,
          "pressedBackgroundOpacity": 1,
          "iconHeight": 32,
          "borderSize": 0,
          "data": {
           "name": "Button Lorem Ipsum"
          },
          "pressedBackgroundColorRatios": [
           0
          ],
          "gap": 5,
          "paddingBottom": 0,
          "verticalAlign": "middle",
          "layout": "horizontal",
          "cursor": "hand",
          "fontWeight": "bold",
          "borderRadius": 0
         }
        ],
        "id": "Container_062A2830_1140_E215_41AA_EB25B7BD381C",
        "width": "100%",
        "contentOpaque": false,
        "scrollBarOpacity": 0.79,
        "backgroundOpacity": 0.3,
        "backgroundColorRatios": [
         0,
         1
        ],
        "shadow": false,
        "scrollBarColor": "#E73B2C",
        "backgroundColorDirection": "vertical",
        "minHeight": 520,
        "overflow": "scroll",
        "paddingTop": 0,
        "backgroundColor": [
         "#FFFFFF",
         "#FFFFFF"
        ],
        "class": "Container",
        "minWidth": 100,
        "paddingRight": 0,
        "scrollBarMargin": 2,
        "height": "100%",
        "scrollBarWidth": 10,
        "gap": 10,
        "propagateClick": false,
        "horizontalAlign": "left",
        "borderSize": 0,
        "data": {
         "name": "Container text"
        },
        "layout": "vertical",
        "paddingBottom": 30,
        "scrollBarVisible": "rollOver",
        "verticalAlign": "top",
        "borderRadius": 0
       },
       {
        "paddingLeft": 0,
        "id": "Container_062AE830_1140_E215_4180_196ED689F4BD",
        "width": 370,
        "contentOpaque": false,
        "scrollBarOpacity": 0.5,
        "backgroundOpacity": 0.3,
        "backgroundColorRatios": [
         0,
         1
        ],
        "shadow": false,
        "scrollBarColor": "#000000",
        "backgroundColorDirection": "vertical",
        "minHeight": 1,
        "overflow": "scroll",
        "paddingTop": 0,
        "height": 40,
        "class": "Container",
        "minWidth": 1,
        "backgroundColor": [
         "#FFFFFF",
         "#FFFFFF"
        ],
        "paddingRight": 0,
        "scrollBarMargin": 2,
        "scrollBarWidth": 10,
        "gap": 10,
        "propagateClick": false,
        "horizontalAlign": "left",
        "borderSize": 0,
        "data": {
         "name": "Container space"
        },
        "layout": "horizontal",
        "paddingBottom": 0,
        "scrollBarVisible": "rollOver",
        "verticalAlign": "top",
        "borderRadius": 0
       }
      ],
      "id": "Container_062A082F_1140_E20A_4193_DF1A4391DC79",
      "width": "50%",
      "contentOpaque": false,
      "scrollBarOpacity": 0.51,
      "backgroundOpacity": 1,
      "backgroundColorRatios": [
       0,
       1
      ],
      "shadow": false,
      "scrollBarColor": "#0069A3",
      "backgroundColorDirection": "vertical",
      "minHeight": 1,
      "overflow": "visible",
      "paddingTop": 20,
      "backgroundColor": [
       "#FFFFFF",
       "#FFFFFF"
      ],
      "class": "Container",
      "minWidth": 460,
      "paddingRight": 50,
      "scrollBarMargin": 2,
      "height": "100%",
      "scrollBarWidth": 10,
      "gap": 0,
      "propagateClick": false,
      "horizontalAlign": "left",
      "borderSize": 0,
      "data": {
       "name": "-right"
      },
      "layout": "vertical",
      "paddingBottom": 20,
      "scrollBarVisible": "rollOver",
      "verticalAlign": "top",
      "borderRadius": 0
     }
    ],
    "shadowBlurRadius": 25,
    "id": "Container_062A782F_1140_E20B_41AF_B3E5DE341773",
    "left": "15%",
    "contentOpaque": false,
    "verticalAlign": "top",
    "shadowColor": "#000000",
    "scrollBarOpacity": 0.5,
    "right": "15%",
    "shadow": true,
    "backgroundColorRatios": [
     0,
     1
    ],
    "backgroundOpacity": 1,
    "scrollBarColor": "#000000",
    "backgroundColorDirection": "vertical",
    "minHeight": 1,
    "shadowSpread": 1,
    "top": "10%",
    "shadowVerticalLength": 0,
    "overflow": "scroll",
    "bottom": "10%",
    "paddingTop": 0,
    "class": "Container",
    "minWidth": 1,
    "paddingRight": 0,
    "scrollBarMargin": 2,
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "scrollBarWidth": 10,
    "gap": 0,
    "propagateClick": false,
    "horizontalAlign": "left",
    "borderSize": 0,
    "data": {
     "name": "Global"
    },
    "layout": "horizontal",
    "paddingBottom": 0,
    "scrollBarVisible": "rollOver",
    "shadowOpacity": 0.3,
    "shadowHorizontalLength": 0,
    "borderRadius": 0
   },
   {
    "paddingLeft": 0,
    "scrollBarOpacity": 0.5,
    "children": [
     {
      "maxHeight": 60,
      "maxWidth": 60,
      "id": "IconButton_062A8830_1140_E215_419D_3439F16CCB3E",
      "width": "25%",
      "iconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E.jpg",
      "shadow": false,
      "transparencyActive": false,
      "backgroundOpacity": 0,
      "minHeight": 50,
      "pressedIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_pressed.jpg",
      "paddingTop": 0,
      "height": "75%",
      "class": "IconButton",
      "minWidth": 50,
      "mode": "push",
      "paddingRight": 0,
      "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
      "horizontalAlign": "center",
      "propagateClick": false,
      "borderSize": 0,
      "data": {
       "name": "X"
      },
      "rollOverIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_rollover.jpg",
      "paddingLeft": 0,
      "paddingBottom": 0,
      "verticalAlign": "middle",
      "cursor": "hand",
      "borderRadius": 0
     }
    ],
    "id": "Container_062A9830_1140_E215_41A7_5F2BBE5C20E4",
    "left": "15%",
    "contentOpaque": false,
    "right": "15%",
    "backgroundOpacity": 0,
    "shadow": false,
    "scrollBarColor": "#000000",
    "minHeight": 1,
    "overflow": "visible",
    "paddingTop": 20,
    "bottom": "80%",
    "top": "10%",
    "class": "Container",
    "minWidth": 1,
    "paddingRight": 20,
    "scrollBarMargin": 2,
    "scrollBarWidth": 10,
    "gap": 10,
    "propagateClick": false,
    "horizontalAlign": "right",
    "borderSize": 0,
    "data": {
     "name": "Container X global"
    },
    "layout": "vertical",
    "paddingBottom": 0,
    "scrollBarVisible": "rollOver",
    "verticalAlign": "top",
    "borderRadius": 0
   }
  ],
  "id": "Container_062AB830_1140_E215_41AF_6C9D65345420",
  "left": "0%",
  "contentOpaque": false,
  "scrollBarOpacity": 0.5,
  "right": "0%",
  "shadow": false,
  "scrollBarWidth": 10,
  "backgroundColorRatios": [
   0,
   1
  ],
  "scrollBarColor": "#000000",
  "backgroundColorDirection": "vertical",
  "backgroundOpacity": 0.6,
  "minHeight": 1,
  "creationPolicy": "inAdvance",
  "overflow": "scroll",
  "top": "0%",
  "bottom": "0%",
  "paddingTop": 0,
  "class": "Container",
  "minWidth": 1,
  "backgroundColor": [
   "#000000",
   "#000000"
  ],
  "paddingRight": 0,
  "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
  "scrollBarMargin": 2,
  "gap": 10,
  "propagateClick": true,
  "horizontalAlign": "left",
  "borderSize": 0,
  "data": {
   "name": "---INFO photo"
  },
  "layout": "absolute",
  "visible": false,
  "paddingBottom": 0,
  "scrollBarVisible": "rollOver",
  "verticalAlign": "top",
  "borderRadius": 0
 },
 {
  "paddingLeft": 0,
  "children": [
   {
    "paddingLeft": 0,
    "children": [
     {
      "paddingLeft": 0,
      "children": [
       {
        "paddingLeft": 0,
        "maxHeight": 60,
        "maxWidth": 60,
        "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
        "width": "100%",
        "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg",
        "right": 20,
        "shadow": false,
        "transparencyActive": false,
        "backgroundOpacity": 0,
        "minHeight": 50,
        "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
        "paddingTop": 0,
        "top": 20,
        "class": "IconButton",
        "minWidth": 50,
        "mode": "push",
        "paddingRight": 0,
        "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
        "horizontalAlign": "right",
        "height": "36.14%",
        "propagateClick": false,
        "borderSize": 0,
        "data": {
         "name": "IconButton X"
        },
        "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
        "paddingBottom": 0,
        "verticalAlign": "top",
        "cursor": "hand",
        "borderRadius": 0
       }
      ],
      "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
      "width": "100%",
      "contentOpaque": false,
      "scrollBarOpacity": 0.5,
      "backgroundOpacity": 0.3,
      "backgroundColorRatios": [
       0,
       1
      ],
      "shadow": false,
      "scrollBarColor": "#000000",
      "backgroundColorDirection": "vertical",
      "minHeight": 1,
      "overflow": "scroll",
      "paddingTop": 0,
      "height": 140,
      "class": "Container",
      "minWidth": 1,
      "backgroundColor": [
       "#FFFFFF",
       "#FFFFFF"
      ],
      "paddingRight": 0,
      "scrollBarMargin": 2,
      "scrollBarWidth": 10,
      "gap": 10,
      "propagateClick": false,
      "horizontalAlign": "left",
      "borderSize": 0,
      "data": {
       "name": "header"
      },
      "layout": "absolute",
      "paddingBottom": 0,
      "scrollBarVisible": "rollOver",
      "verticalAlign": "top",
      "borderRadius": 0
     },
     {
      "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
      "scrollBarVisible": "rollOver",
      "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
      "left": 0,
      "itemLabelFontStyle": "normal",
      "selectedItemThumbnailShadow": true,
      "itemThumbnailWidth": 220,
      "itemOpacity": 1,
      "itemLabelPosition": "bottom",
      "width": "100%",
      "selectedItemThumbnailShadowVerticalLength": 0,
      "rollOverItemLabelFontColor": "#F7931E",
      "scrollBarColor": "#F7931E",
      "itemMinWidth": 50,
      "minHeight": 1,
      "itemThumbnailOpacity": 1,
      "rollOverItemThumbnailShadow": true,
      "itemLabelFontColor": "#666666",
      "height": "92%",
      "itemPaddingBottom": 3,
      "itemPaddingTop": 3,
      "itemHeight": 160,
      "paddingRight": 70,
      "minWidth": 1,
      "rollOverItemThumbnailShadowHorizontalLength": 8,
      "itemLabelFontFamily": "Montserrat",
      "itemMaxWidth": 1000,
      "rollOverItemThumbnailShadowBlurRadius": 0,
      "selectedItemThumbnailShadowBlurRadius": 16,
      "itemVerticalAlign": "top",
      "itemBackgroundOpacity": 0,
      "itemThumbnailBorderRadius": 0,
      "itemWidth": 220,
      "itemPaddingRight": 3,
      "itemMode": "normal",
      "scrollBarOpacity": 0.5,
      "borderRadius": 5,
      "itemLabelTextDecoration": "none",
      "rollOverItemThumbnailShadowColor": "#F7931E",
      "itemLabelFontWeight": "normal",
      "shadow": false,
      "selectedItemLabelFontColor": "#F7931E",
      "itemBorderRadius": 0,
      "backgroundOpacity": 0,
      "itemPaddingLeft": 3,
      "itemLabelGap": 7,
      "itemThumbnailHeight": 125,
      "rollOverItemThumbnailShadowVerticalLength": 0,
      "itemMaxHeight": 1000,
      "itemThumbnailShadow": false,
      "paddingTop": 10,
      "bottom": -0.2,
      "itemHorizontalAlign": "center",
      "class": "ThumbnailGrid",
      "selectedItemLabelFontWeight": "bold",
      "itemThumbnailScaleMode": "fit_outside",
      "gap": 26,
      "selectedItemThumbnailShadowHorizontalLength": 0,
      "scrollBarMargin": 2,
      "itemLabelHorizontalAlign": "center",
      "scrollBarWidth": 10,
      "horizontalAlign": "center",
      "itemBackgroundColorDirection": "vertical",
      "itemLabelFontSize": 13,
      "itemMinHeight": 50,
      "propagateClick": false,
      "data": {
       "name": "ThumbnailList"
      },
      "paddingLeft": 70,
      "paddingBottom": 70,
      "borderSize": 0,
      "itemBackgroundColorRatios": [],
      "verticalAlign": "middle",
      "itemBackgroundColor": []
     }
    ],
    "shadowBlurRadius": 25,
    "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
    "left": "15%",
    "contentOpaque": false,
    "verticalAlign": "top",
    "shadowColor": "#000000",
    "scrollBarOpacity": 0.5,
    "right": "15%",
    "shadow": true,
    "backgroundColorRatios": [
     0,
     1
    ],
    "backgroundOpacity": 1,
    "scrollBarColor": "#000000",
    "backgroundColorDirection": "vertical",
    "minHeight": 1,
    "shadowSpread": 1,
    "top": "10%",
    "shadowVerticalLength": 0,
    "overflow": "visible",
    "bottom": "10%",
    "paddingTop": 0,
    "class": "Container",
    "minWidth": 1,
    "paddingRight": 0,
    "scrollBarMargin": 2,
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "scrollBarWidth": 10,
    "gap": 10,
    "propagateClick": false,
    "horizontalAlign": "center",
    "borderSize": 0,
    "data": {
     "name": "Global"
    },
    "layout": "absolute",
    "paddingBottom": 0,
    "scrollBarVisible": "rollOver",
    "shadowOpacity": 0.3,
    "shadowHorizontalLength": 0,
    "borderRadius": 0
   }
  ],
  "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
  "left": "0%",
  "contentOpaque": false,
  "scrollBarOpacity": 0.5,
  "right": "0%",
  "shadow": false,
  "scrollBarWidth": 10,
  "backgroundColorRatios": [
   0,
   1
  ],
  "scrollBarColor": "#000000",
  "backgroundColorDirection": "vertical",
  "backgroundOpacity": 0.6,
  "minHeight": 1,
  "creationPolicy": "inAdvance",
  "overflow": "scroll",
  "top": "0%",
  "bottom": "0%",
  "paddingTop": 0,
  "class": "Container",
  "minWidth": 1,
  "backgroundColor": [
   "#000000",
   "#000000"
  ],
  "paddingRight": 0,
  "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
  "scrollBarMargin": 2,
  "gap": 10,
  "propagateClick": true,
  "horizontalAlign": "left",
  "borderSize": 0,
  "data": {
   "name": "---PANORAMA LIST"
  },
  "layout": "absolute",
  "visible": false,
  "paddingBottom": 0,
  "scrollBarVisible": "rollOver",
  "verticalAlign": "top",
  "borderRadius": 0
 },
 {
  "paddingLeft": 0,
  "children": [
   {
    "paddingLeft": 0,
    "children": [
     {
      "paddingLeft": 0,
      "id": "WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA",
      "width": "100%",
      "backgroundOpacity": 1,
      "backgroundColorRatios": [
       0
      ],
      "shadow": false,
      "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14377.55330038866!2d-73.99492968084243!3d40.75084469078082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9f775f259%3A0x999668d0d7c3fd7d!2s400+5th+Ave%2C+New+York%2C+NY+10018!5e0!3m2!1ses!2sus!4v1467271743182\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen>",
      "backgroundColorDirection": "vertical",
      "scrollEnabled": true,
      "insetBorder": false,
      "minHeight": 1,
      "paddingTop": 0,
      "backgroundColor": [
       "#FFFFFF"
      ],
      "class": "WebFrame",
      "minWidth": 1,
      "paddingRight": 0,
      "height": "100%",
      "propagateClick": false,
      "borderSize": 0,
      "data": {
       "name": "WebFrame48191"
      },
      "paddingBottom": 0,
      "borderRadius": 0
     }
    ],
    "shadowBlurRadius": 25,
    "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
    "left": "15%",
    "contentOpaque": false,
    "verticalAlign": "top",
    "shadowColor": "#000000",
    "scrollBarOpacity": 0.5,
    "right": "15%",
    "shadow": true,
    "backgroundColorRatios": [
     0,
     1
    ],
    "backgroundOpacity": 1,
    "scrollBarColor": "#000000",
    "backgroundColorDirection": "vertical",
    "minHeight": 1,
    "shadowSpread": 1,
    "top": "10%",
    "shadowVerticalLength": 0,
    "overflow": "scroll",
    "bottom": "10%",
    "paddingTop": 0,
    "class": "Container",
    "minWidth": 1,
    "paddingRight": 0,
    "scrollBarMargin": 2,
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "scrollBarWidth": 10,
    "gap": 10,
    "propagateClick": false,
    "horizontalAlign": "left",
    "borderSize": 0,
    "data": {
     "name": "Global"
    },
    "layout": "horizontal",
    "paddingBottom": 0,
    "scrollBarVisible": "rollOver",
    "shadowOpacity": 0.3,
    "shadowHorizontalLength": 0,
    "borderRadius": 0
   },
   {
    "scrollBarOpacity": 0.5,
    "children": [
     {
      "maxHeight": 60,
      "maxWidth": 60,
      "id": "IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF",
      "width": "25%",
      "iconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF.jpg",
      "shadow": false,
      "transparencyActive": false,
      "backgroundOpacity": 0,
      "minHeight": 50,
      "pressedIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed.jpg",
      "paddingTop": 0,
      "height": "75%",
      "class": "IconButton",
      "minWidth": 50,
      "mode": "push",
      "paddingRight": 0,
      "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
      "horizontalAlign": "center",
      "propagateClick": false,
      "borderSize": 0,
      "data": {
       "name": "X"
      },
      "rollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg",
      "paddingLeft": 0,
      "paddingBottom": 0,
      "verticalAlign": "middle",
      "cursor": "hand",
      "borderRadius": 0
     }
    ],
    "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
    "left": "15%",
    "contentOpaque": false,
    "right": "15%",
    "backgroundOpacity": 0,
    "shadow": false,
    "scrollBarColor": "#000000",
    "minHeight": 1,
    "overflow": "visible",
    "paddingTop": 20,
    "bottom": "80%",
    "top": "10%",
    "class": "Container",
    "minWidth": 1,
    "paddingRight": 20,
    "scrollBarMargin": 2,
    "scrollBarWidth": 10,
    "gap": 10,
    "propagateClick": false,
    "horizontalAlign": "right",
    "borderSize": 0,
    "data": {
     "name": "Container X global"
    },
    "layout": "vertical",
    "paddingLeft": 0,
    "paddingBottom": 0,
    "scrollBarVisible": "rollOver",
    "verticalAlign": "top",
    "borderRadius": 0
   }
  ],
  "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
  "left": "0%",
  "contentOpaque": false,
  "scrollBarOpacity": 0.5,
  "right": "0%",
  "shadow": false,
  "scrollBarWidth": 10,
  "backgroundColorRatios": [
   0,
   1
  ],
  "scrollBarColor": "#000000",
  "backgroundColorDirection": "vertical",
  "backgroundOpacity": 0.6,
  "minHeight": 1,
  "creationPolicy": "inAdvance",
  "overflow": "scroll",
  "top": "0%",
  "bottom": "0%",
  "paddingTop": 0,
  "class": "Container",
  "minWidth": 1,
  "backgroundColor": [
   "#000000",
   "#000000"
  ],
  "paddingRight": 0,
  "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
  "scrollBarMargin": 2,
  "gap": 10,
  "propagateClick": true,
  "horizontalAlign": "left",
  "borderSize": 0,
  "data": {
   "name": "---LOCATION"
  },
  "layout": "absolute",
  "visible": false,
  "paddingBottom": 0,
  "scrollBarVisible": "rollOver",
  "verticalAlign": "top",
  "borderRadius": 0
 },
 {
  "paddingLeft": 0,
  "children": [
   {
    "paddingLeft": 0,
    "children": [
     {
      "playbackBarHeadShadowVerticalLength": 0,
      "playbackBarProgressOpacity": 1,
      "progressLeft": 0,
      "id": "MapViewer",
      "toolTipShadowOpacity": 1,
      "width": "100%",
      "playbackBarBottom": 0,
      "progressBackgroundColorDirection": "vertical",
      "playbackBarBorderSize": 0,
      "playbackBarHeadOpacity": 1,
      "playbackBarBackgroundOpacity": 1,
      "toolTipFontWeight": "normal",
      "progressBarBackgroundColorRatios": [
       0
      ],
      "toolTipOpacity": 1,
      "toolTipPaddingRight": 6,
      "progressBorderColor": "#FFFFFF",
      "minHeight": 1,
      "displayTooltipInTouchScreens": true,
      "toolTipPaddingLeft": 6,
      "toolTipShadowSpread": 0,
      "playbackBarHeadBorderSize": 0,
      "minWidth": 1,
      "height": "100%",
      "progressBarBackgroundColor": [
       "#3399FF"
      ],
      "toolTipBackgroundColor": "#F6F6F6",
      "paddingRight": 0,
      "playbackBarHeadShadowColor": "#000000",
      "toolTipDisplayTime": 600,
      "progressOpacity": 1,
      "progressBackgroundColor": [
       "#FFFFFF"
      ],
      "progressRight": 0,
      "progressBarBackgroundColorDirection": "vertical",
      "toolTipBorderSize": 1,
      "toolTipShadowHorizontalLength": 0,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "playbackBarBackgroundColor": [
       "#FFFFFF"
      ],
      "toolTipShadowBlurRadius": 3,
      "toolTipTextShadowColor": "#000000",
      "playbackBarHeight": 10,
      "progressBackgroundColorRatios": [
       0.01
      ],
      "playbackBarHeadWidth": 6,
      "progressBottom": 2,
      "progressHeight": 10,
      "playbackBarRight": 0,
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarLeft": 0,
      "borderRadius": 0,
      "toolTipBorderColor": "#767676",
      "playbackBarHeadShadow": true,
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "toolTipTextShadowBlurRadius": 3,
      "toolTipPaddingBottom": 4,
      "progressBackgroundOpacity": 1,
      "playbackBarHeadShadowHorizontalLength": 0,
      "transitionDuration": 500,
      "toolTipShadowVerticalLength": 0,
      "playbackBarHeadHeight": 15,
      "toolTipBorderRadius": 3,
      "shadow": false,
      "progressBarOpacity": 1,
      "playbackBarOpacity": 1,
      "toolTipFontStyle": "normal",
      "progressBorderSize": 0,
      "playbackBarProgressBackgroundColor": [
       "#3399FF"
      ],
      "progressBarBorderSize": 0,
      "toolTipPaddingTop": 4,
      "playbackBarProgressBorderSize": 0,
      "paddingTop": 0,
      "playbackBarProgressBorderRadius": 0,
      "progressBarBorderColor": "#0066FF",
      "toolTipFontSize": 12,
      "transitionMode": "blending",
      "class": "ViewerArea",
      "playbackBarHeadShadowOpacity": 0.7,
      "playbackBarBorderColor": "#FFFFFF",
      "progressBorderRadius": 0,
      "playbackBarProgressBackgroundColorRatios": [
       0
      ],
      "toolTipShadowColor": "#333333",
      "playbackBarBorderRadius": 0,
      "progressBarBorderRadius": 0,
      "toolTipFontFamily": "Arial",
      "playbackBarProgressBorderColor": "#000000",
      "toolTipTextShadowOpacity": 0,
      "propagateClick": false,
      "playbackBarHeadShadowBlurRadius": 3,
      "borderSize": 0,
      "data": {
       "name": "Floor Plan"
      },
      "playbackBarHeadBorderRadius": 0,
      "paddingLeft": 0,
      "playbackBarHeadBorderColor": "#000000",
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "paddingBottom": 0,
      "toolTipFontColor": "#606060"
     },
     {
      "scrollBarOpacity": 0.5,
      "children": [
       {
        "paddingLeft": 0,
        "maxHeight": 60,
        "maxWidth": 60,
        "id": "IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E",
        "width": "100%",
        "iconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E.jpg",
        "right": 20,
        "shadow": false,
        "transparencyActive": false,
        "backgroundOpacity": 0,
        "minHeight": 50,
        "pressedIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed.jpg",
        "paddingTop": 0,
        "top": 20,
        "class": "IconButton",
        "minWidth": 50,
        "mode": "push",
        "paddingRight": 0,
        "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
        "horizontalAlign": "right",
        "height": "36.14%",
        "propagateClick": false,
        "borderSize": 0,
        "data": {
         "name": "IconButton X"
        },
        "rollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_rollover.jpg",
        "paddingBottom": 0,
        "verticalAlign": "top",
        "cursor": "hand",
        "borderRadius": 0
       }
      ],
      "id": "Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
      "width": "100%",
      "contentOpaque": false,
      "backgroundOpacity": 0,
      "shadow": false,
      "scrollBarColor": "#000000",
      "minHeight": 1,
      "overflow": "scroll",
      "paddingTop": 0,
      "height": 140,
      "class": "Container",
      "minWidth": 1,
      "paddingRight": 0,
      "scrollBarMargin": 2,
      "scrollBarWidth": 10,
      "gap": 10,
      "propagateClick": false,
      "horizontalAlign": "left",
      "borderSize": 0,
      "data": {
       "name": "header"
      },
      "layout": "absolute",
      "paddingLeft": 0,
      "paddingBottom": 0,
      "scrollBarVisible": "rollOver",
      "verticalAlign": "top",
      "borderRadius": 0
     }
    ],
    "shadowBlurRadius": 25,
    "id": "Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
    "left": "15%",
    "contentOpaque": false,
    "verticalAlign": "top",
    "shadowColor": "#000000",
    "scrollBarOpacity": 0.5,
    "right": "15%",
    "shadow": true,
    "backgroundColorRatios": [
     0,
     1
    ],
    "backgroundOpacity": 1,
    "scrollBarColor": "#000000",
    "backgroundColorDirection": "vertical",
    "minHeight": 1,
    "shadowSpread": 1,
    "top": "10%",
    "shadowVerticalLength": 0,
    "overflow": "visible",
    "bottom": "10%",
    "paddingTop": 0,
    "class": "Container",
    "minWidth": 1,
    "paddingRight": 0,
    "scrollBarMargin": 2,
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "scrollBarWidth": 10,
    "gap": 10,
    "propagateClick": false,
    "horizontalAlign": "center",
    "borderSize": 0,
    "data": {
     "name": "Global"
    },
    "layout": "absolute",
    "paddingBottom": 0,
    "scrollBarVisible": "rollOver",
    "shadowOpacity": 0.3,
    "shadowHorizontalLength": 0,
    "borderRadius": 0
   }
  ],
  "id": "Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
  "left": "0%",
  "contentOpaque": false,
  "scrollBarOpacity": 0.5,
  "right": "0%",
  "shadow": false,
  "scrollBarWidth": 10,
  "backgroundColorRatios": [
   0,
   1
  ],
  "scrollBarColor": "#000000",
  "backgroundColorDirection": "vertical",
  "backgroundOpacity": 0.6,
  "minHeight": 1,
  "creationPolicy": "inAdvance",
  "overflow": "scroll",
  "top": "0%",
  "bottom": "0%",
  "paddingTop": 0,
  "class": "Container",
  "minWidth": 1,
  "backgroundColor": [
   "#000000",
   "#000000"
  ],
  "paddingRight": 0,
  "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
  "scrollBarMargin": 2,
  "gap": 10,
  "propagateClick": true,
  "horizontalAlign": "left",
  "borderSize": 0,
  "data": {
   "name": "---FLOORPLAN"
  },
  "layout": "absolute",
  "visible": false,
  "paddingBottom": 0,
  "scrollBarVisible": "rollOver",
  "verticalAlign": "top",
  "borderRadius": 0
 },
 {
  "paddingLeft": 0,
  "children": [
   {
    "paddingLeft": 0,
    "children": [
     {
      "paddingLeft": 0,
      "children": [
       {
        "playbackBarHeadShadowVerticalLength": 0,
        "playbackBarProgressOpacity": 1,
        "progressLeft": 0,
        "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
        "left": "0%",
        "width": "100%",
        "playbackBarBottom": 0,
        "toolTipShadowOpacity": 1,
        "playbackBarBorderSize": 0,
        "playbackBarHeadOpacity": 1,
        "playbackBarBackgroundOpacity": 1,
        "toolTipFontWeight": "normal",
        "progressBackgroundColorDirection": "vertical",
        "toolTipOpacity": 1,
        "toolTipPaddingRight": 6,
        "progressBorderColor": "#FFFFFF",
        "progressBarBackgroundColorRatios": [
         0
        ],
        "minHeight": 1,
        "displayTooltipInTouchScreens": true,
        "toolTipPaddingLeft": 6,
        "toolTipShadowSpread": 0,
        "playbackBarHeadBorderSize": 0,
        "minWidth": 1,
        "height": "100%",
        "progressBarBackgroundColor": [
         "#3399FF"
        ],
        "toolTipBackgroundColor": "#F6F6F6",
        "paddingRight": 0,
        "playbackBarHeadShadowColor": "#000000",
        "toolTipDisplayTime": 600,
        "progressOpacity": 1,
        "progressBackgroundColor": [
         "#FFFFFF"
        ],
        "progressRight": 0,
        "progressBarBackgroundColorDirection": "vertical",
        "toolTipBorderSize": 1,
        "toolTipShadowHorizontalLength": 0,
        "playbackBarHeadBackgroundColor": [
         "#111111",
         "#666666"
        ],
        "playbackBarProgressBackgroundColorDirection": "vertical",
        "playbackBarBackgroundColor": [
         "#FFFFFF"
        ],
        "toolTipShadowBlurRadius": 3,
        "toolTipTextShadowColor": "#000000",
        "playbackBarHeight": 10,
        "progressBackgroundColorRatios": [
         0.01
        ],
        "playbackBarHeadWidth": 6,
        "progressBottom": 2,
        "progressHeight": 10,
        "playbackBarRight": 0,
        "playbackBarBackgroundColorDirection": "vertical",
        "playbackBarLeft": 0,
        "borderRadius": 0,
        "toolTipBorderColor": "#767676",
        "toolTipPaddingBottom": 4,
        "playbackBarHeadBackgroundColorDirection": "vertical",
        "toolTipTextShadowBlurRadius": 3,
        "playbackBarHeadShadow": true,
        "progressBackgroundOpacity": 1,
        "playbackBarHeadShadowHorizontalLength": 0,
        "transitionDuration": 500,
        "shadow": false,
        "toolTipShadowVerticalLength": 0,
        "playbackBarHeadHeight": 15,
        "toolTipBorderRadius": 3,
        "progressBarOpacity": 1,
        "playbackBarOpacity": 1,
        "toolTipFontStyle": "normal",
        "progressBorderSize": 0,
        "playbackBarProgressBackgroundColor": [
         "#3399FF"
        ],
        "progressBarBorderSize": 0,
        "toolTipPaddingTop": 4,
        "playbackBarProgressBorderSize": 0,
        "top": "0%",
        "playbackBarProgressBorderRadius": 0,
        "progressBarBorderColor": "#0066FF",
        "toolTipFontSize": 12,
        "paddingTop": 0,
        "transitionMode": "blending",
        "class": "ViewerArea",
        "playbackBarHeadShadowOpacity": 0.7,
        "playbackBarBorderColor": "#FFFFFF",
        "progressBorderRadius": 0,
        "playbackBarProgressBackgroundColorRatios": [
         0
        ],
        "toolTipShadowColor": "#333333",
        "playbackBarBorderRadius": 0,
        "progressBarBorderRadius": 0,
        "toolTipFontFamily": "Arial",
        "playbackBarProgressBorderColor": "#000000",
        "toolTipTextShadowOpacity": 0,
        "propagateClick": false,
        "playbackBarHeadShadowBlurRadius": 3,
        "borderSize": 0,
        "data": {
         "name": "Viewer photoalbum 1"
        },
        "playbackBarHeadBorderRadius": 0,
        "paddingLeft": 0,
        "playbackBarHeadBorderColor": "#000000",
        "playbackBarHeadBackgroundColorRatios": [
         0,
         1
        ],
        "paddingBottom": 0,
        "toolTipFontColor": "#606060"
       },
       {
        "paddingLeft": 0,
        "maxHeight": 60,
        "maxWidth": 60,
        "id": "IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
        "left": 10,
        "width": "14.22%",
        "shadow": false,
        "transparencyActive": false,
        "backgroundOpacity": 0,
        "minHeight": 50,
        "pressedIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed.png",
        "iconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482.png",
        "paddingTop": 0,
        "bottom": "20%",
        "top": "20%",
        "class": "IconButton",
        "minWidth": 50,
        "mode": "push",
        "paddingRight": 0,
        "horizontalAlign": "center",
        "propagateClick": false,
        "borderSize": 0,
        "data": {
         "name": "IconButton <"
        },
        "rollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_rollover.png",
        "paddingBottom": 0,
        "verticalAlign": "middle",
        "cursor": "hand",
        "borderRadius": 0
       },
       {
        "paddingLeft": 0,
        "maxHeight": 60,
        "maxWidth": 60,
        "id": "IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
        "width": "14.22%",
        "iconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510.png",
        "right": 10,
        "shadow": false,
        "transparencyActive": false,
        "backgroundOpacity": 0,
        "minHeight": 50,
        "pressedIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed.png",
        "paddingTop": 0,
        "bottom": "20%",
        "top": "20%",
        "class": "IconButton",
        "minWidth": 50,
        "mode": "push",
        "paddingRight": 0,
        "horizontalAlign": "center",
        "propagateClick": false,
        "borderSize": 0,
        "data": {
         "name": "IconButton >"
        },
        "rollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_rollover.png",
        "paddingBottom": 0,
        "verticalAlign": "middle",
        "cursor": "hand",
        "borderRadius": 0
       },
       {
        "paddingLeft": 0,
        "maxHeight": 60,
        "maxWidth": 60,
        "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
        "width": "10%",
        "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.jpg",
        "right": 20,
        "shadow": false,
        "transparencyActive": false,
        "backgroundOpacity": 0,
        "minHeight": 50,
        "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.jpg",
        "paddingTop": 0,
        "top": 20,
        "class": "IconButton",
        "minWidth": 50,
        "mode": "push",
        "paddingRight": 0,
        "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
        "horizontalAlign": "right",
        "height": "10%",
        "propagateClick": false,
        "borderSize": 0,
        "data": {
         "name": "IconButton X"
        },
        "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.jpg",
        "paddingBottom": 0,
        "verticalAlign": "top",
        "cursor": "hand",
        "borderRadius": 0
       }
      ],
      "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
      "width": "100%",
      "contentOpaque": false,
      "scrollBarOpacity": 0.5,
      "backgroundOpacity": 0.3,
      "backgroundColorRatios": [
       0,
       1
      ],
      "shadow": false,
      "scrollBarColor": "#000000",
      "backgroundColorDirection": "vertical",
      "minHeight": 1,
      "overflow": "visible",
      "paddingTop": 0,
      "backgroundColor": [
       "#FFFFFF",
       "#FFFFFF"
      ],
      "class": "Container",
      "minWidth": 1,
      "paddingRight": 0,
      "scrollBarMargin": 2,
      "height": "100%",
      "scrollBarWidth": 10,
      "gap": 10,
      "propagateClick": false,
      "horizontalAlign": "left",
      "borderSize": 0,
      "data": {
       "name": "Container photo"
      },
      "layout": "absolute",
      "paddingBottom": 0,
      "scrollBarVisible": "rollOver",
      "verticalAlign": "top",
      "borderRadius": 0
     }
    ],
    "shadowBlurRadius": 25,
    "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
    "left": "15%",
    "contentOpaque": false,
    "verticalAlign": "top",
    "shadowColor": "#000000",
    "scrollBarOpacity": 0.5,
    "right": "15%",
    "shadow": true,
    "backgroundColorRatios": [
     0,
     1
    ],
    "backgroundOpacity": 1,
    "scrollBarColor": "#000000",
    "backgroundColorDirection": "vertical",
    "minHeight": 1,
    "shadowSpread": 1,
    "top": "10%",
    "shadowVerticalLength": 0,
    "overflow": "visible",
    "bottom": "10%",
    "paddingTop": 0,
    "class": "Container",
    "minWidth": 1,
    "paddingRight": 0,
    "scrollBarMargin": 2,
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "scrollBarWidth": 10,
    "gap": 10,
    "propagateClick": false,
    "horizontalAlign": "center",
    "borderSize": 0,
    "data": {
     "name": "Global"
    },
    "layout": "vertical",
    "paddingBottom": 0,
    "scrollBarVisible": "rollOver",
    "shadowOpacity": 0.3,
    "shadowHorizontalLength": 0,
    "borderRadius": 0
   }
  ],
  "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
  "left": "0%",
  "contentOpaque": false,
  "scrollBarOpacity": 0.5,
  "right": "0%",
  "shadow": false,
  "scrollBarWidth": 10,
  "backgroundColorRatios": [
   0,
   1
  ],
  "scrollBarColor": "#000000",
  "backgroundColorDirection": "vertical",
  "backgroundOpacity": 0.6,
  "minHeight": 1,
  "creationPolicy": "inAdvance",
  "overflow": "scroll",
  "top": "0%",
  "bottom": "0%",
  "paddingTop": 0,
  "class": "Container",
  "minWidth": 1,
  "backgroundColor": [
   "#000000",
   "#000000"
  ],
  "paddingRight": 0,
  "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
  "scrollBarMargin": 2,
  "gap": 10,
  "propagateClick": true,
  "horizontalAlign": "left",
  "borderSize": 0,
  "data": {
   "name": "---PHOTOALBUM"
  },
  "layout": "absolute",
  "visible": false,
  "paddingBottom": 0,
  "scrollBarVisible": "rollOver",
  "verticalAlign": "top",
  "borderRadius": 0
 },
 {
  "paddingLeft": 0,
  "children": [
   {
    "paddingLeft": 0,
    "children": [
     {
      "paddingLeft": 0,
      "children": [
       {
        "paddingLeft": 0,
        "maxHeight": 1000,
        "maxWidth": 2000,
        "id": "Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397",
        "left": "0%",
        "width": "100%",
        "backgroundOpacity": 0,
        "shadow": false,
        "url": "skin/Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397.jpg",
        "minHeight": 1,
        "paddingTop": 0,
        "top": "0%",
        "class": "Image",
        "minWidth": 1,
        "paddingRight": 0,
        "horizontalAlign": "center",
        "height": "100%",
        "propagateClick": false,
        "borderSize": 0,
        "data": {
         "name": "Image"
        },
        "paddingBottom": 0,
        "scaleMode": "fit_outside",
        "verticalAlign": "bottom",
        "borderRadius": 0
       }
      ],
      "id": "Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
      "width": "55%",
      "contentOpaque": false,
      "scrollBarOpacity": 0.5,
      "backgroundOpacity": 1,
      "backgroundColorRatios": [
       0
      ],
      "shadow": false,
      "scrollBarColor": "#000000",
      "backgroundColorDirection": "vertical",
      "minHeight": 1,
      "overflow": "scroll",
      "paddingTop": 0,
      "backgroundColor": [
       "#000000"
      ],
      "class": "Container",
      "minWidth": 1,
      "paddingRight": 0,
      "scrollBarMargin": 2,
      "height": "100%",
      "scrollBarWidth": 10,
      "gap": 10,
      "propagateClick": false,
      "horizontalAlign": "center",
      "borderSize": 0,
      "data": {
       "name": "-left"
      },
      "layout": "absolute",
      "paddingBottom": 0,
      "scrollBarVisible": "rollOver",
      "verticalAlign": "middle",
      "borderRadius": 0
     },
     {
      "paddingLeft": 0,
      "id": "Container_27875147_3F82_7A70_41CC_C0FFBB32BEFD",
      "width": 8,
      "contentOpaque": false,
      "scrollBarOpacity": 0.5,
      "backgroundOpacity": 1,
      "backgroundColorRatios": [
       0
      ],
      "shadow": false,
      "scrollBarColor": "#000000",
      "backgroundColorDirection": "vertical",
      "minHeight": 1,
      "overflow": "scroll",
      "paddingTop": 0,
      "backgroundColor": [
       "#F7931E"
      ],
      "class": "Container",
      "minWidth": 1,
      "paddingRight": 0,
      "scrollBarMargin": 2,
      "height": "100%",
      "scrollBarWidth": 10,
      "gap": 10,
      "propagateClick": false,
      "horizontalAlign": "left",
      "borderSize": 0,
      "data": {
       "name": "orange line"
      },
      "layout": "absolute",
      "paddingBottom": 0,
      "scrollBarVisible": "rollOver",
      "verticalAlign": "top",
      "borderRadius": 0
     },
     {
      "paddingLeft": 60,
      "children": [
       {
        "paddingLeft": 0,
        "id": "Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
        "width": "100%",
        "contentOpaque": false,
        "scrollBarOpacity": 0.5,
        "backgroundOpacity": 0.3,
        "backgroundColorRatios": [
         0,
         1
        ],
        "shadow": false,
        "scrollBarColor": "#000000",
        "backgroundColorDirection": "vertical",
        "minHeight": 0,
        "overflow": "scroll",
        "paddingTop": 20,
        "height": 60,
        "class": "Container",
        "minWidth": 1,
        "backgroundColor": [
         "#FFFFFF",
         "#FFFFFF"
        ],
        "paddingRight": 0,
        "scrollBarMargin": 2,
        "scrollBarWidth": 10,
        "gap": 0,
        "propagateClick": false,
        "horizontalAlign": "right",
        "borderSize": 0,
        "data": {
         "name": "Container space"
        },
        "layout": "horizontal",
        "paddingBottom": 0,
        "scrollBarVisible": "rollOver",
        "verticalAlign": "top",
        "borderRadius": 0
       },
       {
        "paddingLeft": 0,
        "children": [
         {
          "scrollBarOpacity": 0.5,
          "id": "HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
          "width": "100%",
          "shadow": false,
          "scrollBarColor": "#04A3E1",
          "backgroundOpacity": 0,
          "minHeight": 1,
          "paddingTop": 0,
          "height": "45%",
          "class": "HTMLText",
          "minWidth": 1,
          "paddingRight": 0,
          "scrollBarMargin": 2,
          "scrollBarWidth": 10,
          "propagateClick": false,
          "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#f7931e;font-size:7.61vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.7vh;font-family:'Montserrat';\"><B>LOREM IPSUM</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.7vh;font-family:'Montserrat';\"><B>DOLOR SIT AMET</B></SPAN></SPAN></DIV></div>",
          "borderSize": 0,
          "data": {
           "name": "HTMLText18899"
          },
          "paddingLeft": 0,
          "paddingBottom": 10,
          "scrollBarVisible": "rollOver",
          "borderRadius": 0
         },
         {
          "paddingLeft": 0,
          "children": [
           {
            "maxHeight": 200,
            "maxWidth": 200,
            "id": "Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
            "width": "25%",
            "shadow": false,
            "url": "skin/Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0.jpg",
            "backgroundOpacity": 0,
            "minHeight": 1,
            "paddingTop": 0,
            "height": "100%",
            "class": "Image",
            "minWidth": 1,
            "paddingRight": 0,
            "horizontalAlign": "left",
            "propagateClick": false,
            "borderSize": 0,
            "data": {
             "name": "agent photo"
            },
            "paddingLeft": 0,
            "paddingBottom": 0,
            "scaleMode": "fit_inside",
            "verticalAlign": "top",
            "borderRadius": 0
           },
           {
            "scrollBarOpacity": 0.5,
            "id": "HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE",
            "width": "75%",
            "shadow": false,
            "scrollBarColor": "#F7931E",
            "backgroundOpacity": 0,
            "minHeight": 1,
            "paddingTop": 0,
            "height": "100%",
            "class": "HTMLText",
            "minWidth": 1,
            "paddingRight": 10,
            "scrollBarMargin": 2,
            "scrollBarWidth": 10,
            "propagateClick": false,
            "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#f7931e;font-size:2.07vh;font-family:'Montserrat';\"><B>JOHN DOE</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.74vh;font-family:'Montserrat';\">LICENSED REAL ESTATE SALESPERSON</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.2vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.2vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.2vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-family:'Montserrat';\">Tlf.: +11 111 111 111</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.2vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-family:'Montserrat';\">jhondoe@realestate.com</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.2vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-family:'Montserrat';\">www.loremipsum.com</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.2vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.2vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.2vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.2vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.2vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV></div>",
            "borderSize": 0,
            "data": {
             "name": "HTMLText19460"
            },
            "paddingLeft": 10,
            "paddingBottom": 10,
            "scrollBarVisible": "rollOver",
            "borderRadius": 0
           }
          ],
          "id": "Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C",
          "width": "100%",
          "contentOpaque": false,
          "scrollBarOpacity": 0.5,
          "backgroundOpacity": 0.3,
          "backgroundColorRatios": [
           0,
           1
          ],
          "shadow": false,
          "scrollBarColor": "#000000",
          "backgroundColorDirection": "vertical",
          "minHeight": 1,
          "overflow": "scroll",
          "paddingTop": 0,
          "backgroundColor": [
           "#FFFFFF",
           "#FFFFFF"
          ],
          "class": "Container",
          "minWidth": 1,
          "paddingRight": 0,
          "scrollBarMargin": 2,
          "height": "80%",
          "scrollBarWidth": 10,
          "gap": 10,
          "propagateClick": false,
          "horizontalAlign": "left",
          "borderSize": 0,
          "data": {
           "name": "- content"
          },
          "layout": "horizontal",
          "paddingBottom": 0,
          "scrollBarVisible": "rollOver",
          "verticalAlign": "top",
          "borderRadius": 0
         }
        ],
        "id": "Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
        "width": "100%",
        "contentOpaque": false,
        "scrollBarOpacity": 0.79,
        "backgroundOpacity": 0.3,
        "backgroundColorRatios": [
         0,
         1
        ],
        "shadow": false,
        "scrollBarColor": "#E73B2C",
        "backgroundColorDirection": "vertical",
        "minHeight": 520,
        "overflow": "scroll",
        "paddingTop": 0,
        "backgroundColor": [
         "#FFFFFF",
         "#FFFFFF"
        ],
        "class": "Container",
        "minWidth": 100,
        "paddingRight": 0,
        "scrollBarMargin": 2,
        "height": "100%",
        "scrollBarWidth": 10,
        "gap": 10,
        "propagateClick": false,
        "horizontalAlign": "left",
        "borderSize": 0,
        "data": {
         "name": "Container text"
        },
        "layout": "vertical",
        "paddingBottom": 30,
        "scrollBarVisible": "rollOver",
        "verticalAlign": "top",
        "borderRadius": 0
       },
       {
        "paddingLeft": 0,
        "id": "Container_06C42BA5_1140_A63F_4195_037A0687532F",
        "width": 370,
        "contentOpaque": false,
        "scrollBarOpacity": 0.5,
        "backgroundOpacity": 0.3,
        "backgroundColorRatios": [
         0,
         1
        ],
        "shadow": false,
        "scrollBarColor": "#000000",
        "backgroundColorDirection": "vertical",
        "minHeight": 1,
        "overflow": "scroll",
        "paddingTop": 0,
        "height": 40,
        "class": "Container",
        "minWidth": 1,
        "backgroundColor": [
         "#FFFFFF",
         "#FFFFFF"
        ],
        "paddingRight": 0,
        "scrollBarMargin": 2,
        "scrollBarWidth": 10,
        "gap": 10,
        "propagateClick": false,
        "horizontalAlign": "left",
        "borderSize": 0,
        "data": {
         "name": "Container space"
        },
        "layout": "horizontal",
        "paddingBottom": 0,
        "scrollBarVisible": "rollOver",
        "verticalAlign": "top",
        "borderRadius": 0
       }
      ],
      "id": "Container_06C58BA5_1140_A63F_419D_EC83F94F8C54",
      "width": "45%",
      "contentOpaque": false,
      "scrollBarOpacity": 0.51,
      "backgroundOpacity": 1,
      "backgroundColorRatios": [
       0,
       1
      ],
      "shadow": false,
      "scrollBarColor": "#0069A3",
      "backgroundColorDirection": "vertical",
      "minHeight": 1,
      "overflow": "visible",
      "paddingTop": 20,
      "backgroundColor": [
       "#FFFFFF",
       "#FFFFFF"
      ],
      "class": "Container",
      "minWidth": 460,
      "paddingRight": 60,
      "scrollBarMargin": 2,
      "height": "100%",
      "scrollBarWidth": 10,
      "gap": 0,
      "propagateClick": false,
      "horizontalAlign": "left",
      "borderSize": 0,
      "data": {
       "name": "-right"
      },
      "layout": "vertical",
      "paddingBottom": 20,
      "scrollBarVisible": "rollOver",
      "verticalAlign": "top",
      "borderRadius": 0
     }
    ],
    "shadowBlurRadius": 25,
    "id": "Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
    "left": "15%",
    "contentOpaque": false,
    "verticalAlign": "top",
    "shadowColor": "#000000",
    "scrollBarOpacity": 0.5,
    "right": "15%",
    "shadow": true,
    "backgroundColorRatios": [
     0,
     1
    ],
    "backgroundOpacity": 1,
    "scrollBarColor": "#000000",
    "backgroundColorDirection": "vertical",
    "minHeight": 1,
    "shadowSpread": 1,
    "top": "10%",
    "shadowVerticalLength": 0,
    "overflow": "scroll",
    "bottom": "10%",
    "paddingTop": 0,
    "class": "Container",
    "minWidth": 1,
    "paddingRight": 0,
    "scrollBarMargin": 2,
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "scrollBarWidth": 10,
    "gap": 0,
    "propagateClick": false,
    "horizontalAlign": "left",
    "borderSize": 0,
    "data": {
     "name": "Global"
    },
    "layout": "horizontal",
    "paddingBottom": 0,
    "scrollBarVisible": "rollOver",
    "shadowOpacity": 0.3,
    "shadowHorizontalLength": 0,
    "borderRadius": 0
   },
   {
    "paddingLeft": 0,
    "scrollBarOpacity": 0.5,
    "children": [
     {
      "maxHeight": 60,
      "maxWidth": 60,
      "id": "IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81",
      "width": "25%",
      "iconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81.jpg",
      "shadow": false,
      "transparencyActive": false,
      "backgroundOpacity": 0,
      "minHeight": 50,
      "pressedIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_pressed.jpg",
      "paddingTop": 0,
      "height": "75%",
      "class": "IconButton",
      "minWidth": 50,
      "mode": "push",
      "paddingRight": 0,
      "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false)",
      "horizontalAlign": "center",
      "propagateClick": false,
      "borderSize": 0,
      "data": {
       "name": "X"
      },
      "rollOverIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_rollover.jpg",
      "paddingLeft": 0,
      "paddingBottom": 0,
      "verticalAlign": "middle",
      "cursor": "hand",
      "borderRadius": 0
     }
    ],
    "id": "Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F",
    "left": "15%",
    "contentOpaque": false,
    "right": "15%",
    "backgroundOpacity": 0,
    "shadow": false,
    "scrollBarColor": "#000000",
    "minHeight": 1,
    "overflow": "visible",
    "paddingTop": 20,
    "bottom": "80%",
    "top": "10%",
    "class": "Container",
    "minWidth": 1,
    "paddingRight": 20,
    "scrollBarMargin": 2,
    "scrollBarWidth": 10,
    "gap": 10,
    "propagateClick": false,
    "horizontalAlign": "right",
    "borderSize": 0,
    "data": {
     "name": "Container X global"
    },
    "layout": "vertical",
    "paddingBottom": 0,
    "scrollBarVisible": "rollOver",
    "verticalAlign": "top",
    "borderRadius": 0
   }
  ],
  "id": "Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC",
  "left": "0%",
  "contentOpaque": false,
  "scrollBarOpacity": 0.5,
  "right": "0%",
  "shadow": false,
  "scrollBarWidth": 10,
  "backgroundColorRatios": [
   0,
   1
  ],
  "scrollBarColor": "#04A3E1",
  "backgroundColorDirection": "vertical",
  "backgroundOpacity": 0.6,
  "minHeight": 1,
  "creationPolicy": "inAdvance",
  "overflow": "scroll",
  "top": "0%",
  "bottom": "0%",
  "paddingTop": 0,
  "class": "Container",
  "minWidth": 1,
  "backgroundColor": [
   "#000000",
   "#000000"
  ],
  "paddingRight": 0,
  "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false)",
  "scrollBarMargin": 2,
  "gap": 10,
  "propagateClick": true,
  "horizontalAlign": "left",
  "borderSize": 0,
  "data": {
   "name": "---REALTOR"
  },
  "layout": "absolute",
  "visible": false,
  "paddingBottom": 0,
  "scrollBarVisible": "rollOver",
  "verticalAlign": "top",
  "borderRadius": 0
 },
 {
  "paddingLeft": 0,
  "id": "veilPopupPanorama",
  "left": 0,
  "right": 0,
  "shadow": false,
  "backgroundColorRatios": [
   0
  ],
  "backgroundColorDirection": "vertical",
  "backgroundOpacity": 0.55,
  "minHeight": 0,
  "showEffect": {
   "duration": 350,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "top": 0,
  "bottom": 0,
  "paddingTop": 0,
  "class": "UIComponent",
  "minWidth": 0,
  "backgroundColor": [
   "#000000"
  ],
  "paddingRight": 0,
  "propagateClick": false,
  "borderSize": 0,
  "data": {
   "name": "UIComponent5068"
  },
  "visible": false,
  "paddingBottom": 0,
  "borderRadius": 0
 },
 {
  "paddingLeft": 0,
  "id": "zoomImagePopupPanorama",
  "left": 0,
  "right": 0,
  "shadow": false,
  "backgroundColorRatios": [],
  "backgroundColorDirection": "vertical",
  "backgroundOpacity": 1,
  "minHeight": 0,
  "top": 0,
  "bottom": 0,
  "paddingTop": 0,
  "class": "ZoomImage",
  "minWidth": 0,
  "backgroundColor": [],
  "paddingRight": 0,
  "propagateClick": false,
  "borderSize": 0,
  "data": {
   "name": "ZoomImage5069"
  },
  "visible": false,
  "paddingBottom": 0,
  "scaleMode": "custom",
  "borderRadius": 0
 },
 {
  "textDecoration": "none",
  "paddingLeft": 5,
  "fontFamily": "Arial",
  "fontColor": "#FFFFFF",
  "shadowBlurRadius": 6,
  "id": "closeButtonPopupPanorama",
  "shadowColor": "#000000",
  "iconWidth": 20,
  "right": 10,
  "backgroundOpacity": 0.3,
  "backgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "shadow": false,
  "backgroundColorDirection": "vertical",
  "iconLineWidth": 5,
  "minHeight": 0,
  "borderColor": "#000000",
  "showEffect": {
   "duration": 350,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "top": 10,
  "pressedIconColor": "#888888",
  "shadowSpread": 1,
  "paddingTop": 5,
  "class": "CloseButton",
  "minWidth": 0,
  "mode": "push",
  "backgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "paddingRight": 5,
  "label": "",
  "fontSize": "1.29vh",
  "iconColor": "#000000",
  "horizontalAlign": "center",
  "fontStyle": "normal",
  "iconBeforeLabel": true,
  "propagateClick": false,
  "rollOverIconColor": "#666666",
  "iconHeight": 20,
  "borderSize": 0,
  "data": {
   "name": "CloseButton5070"
  },
  "gap": 5,
  "visible": false,
  "paddingBottom": 5,
  "verticalAlign": "middle",
  "layout": "horizontal",
  "cursor": "hand",
  "fontWeight": "normal",
  "borderRadius": 0
 }
], 
 "mobileMipmappingEnabled": false,
 "paddingLeft": 0,
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.Button_485BFF41_598E_3DB2_41A9_33F36E014467], 'gyroscopeAvailable'); this.syncPlaylists([this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist,this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist,this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist,this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist,this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist,this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist,this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.Button_4CF1FD24_5A86_3DF2_41B3_7CDBA2E3D44A].forEach(function(component) { component.set('visible', false); }) }",
 "vrPolyfillScale": 0.5,
 "backgroundPreloadEnabled": true,
 "id": "rootPlayer",
 "width": "100%",
 "contentOpaque": false,
 "buttonToggleMute": "this.Button_4C5C0864_5A8E_C472_41C4_7C0748488A41",
 "scrollBarOpacity": 0.5,
 "scrollBarWidth": 10,
 "buttonToggleFullscreen": "this.Button_4CF1FD24_5A86_3DF2_41B3_7CDBA2E3D44A",
 "shadow": false,
 "scrollBarColor": "#000000",
 "minHeight": 20,
 "overflow": "visible",
 "paddingTop": 0,
 "class": "Player",
 "minWidth": 20,
 "paddingRight": 0,
 "scripts": {
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } return this.mainPlayList.get('items')[index]; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "existsKey": function(key){  return key in window; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "unregisterKey": function(key){  delete window[key]; },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var caller = playList.get('items')[index].get('media').get('id'); var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "registerKey": function(key, value){  window[key] = value; },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "getKey": function(key){  return window[key]; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } }; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); }
 },
 "scrollBarMargin": 2,
 "desktopMipmappingEnabled": false,
 "height": "100%",
 "gap": 10,
 "propagateClick": true,
 "horizontalAlign": "left",
 "borderSize": 0,
 "data": {
  "name": "Player468"
 },
 "mouseWheelEnabled": true,
 "layout": "absolute",
 "paddingBottom": 0,
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "borderRadius": 0
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
