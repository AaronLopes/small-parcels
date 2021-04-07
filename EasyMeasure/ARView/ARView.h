//
//  ARView.h
//  EasyMeasure API - Version 3.0 (25.10.2015)
//
//  Created by Jaap van Kampen on 12/27/09.
//  Copyright Caramba App Development 2009. All rights reserved.

#import <UIKit/UIKit.h>
#import <QuartzCore/QuartzCore.h>
#import <AVFoundation/AVFoundation.h>



@protocol ARViewDelegate
/// Delegate method that is called when the measurement values are updated
- (void) ARViewValuesUpdated;
/// Delegate method that is called when the processed picture is available after taking a picture
- (void) finishedPictureProcessing:(UIImage*) processedImage;
@end

@interface ARView : UIView <UIAlertViewDelegate> {
    id <ARViewDelegate> delegate;
}
@property (nonatomic, assign) id <ARViewDelegate> delegate;

/// the groundDistance in same unit as the lensHeight
@property (assign) float groundDistance;
/// the height of the object in the box in same unit as the lensHeight
@property (assign) float height;
/// The width of the object in the box in same unit as the lensHeight
@property (assign) float width;
/// The accuracy of the measurement in same unit as the lensHeight
@property (assign) float accuracy;
/// The acceleration values, Array with three NSNumber components, ordered as X, Y, Z acceleration value
@property (nonatomic,retain) NSArray* accel;
/// The sidewards tilt angle of the camera (in radians). You can use this to place your labels
@property (assign) float tiltAngle;
/// the x,y coordinates of the measurement target
@property (assign) CGPoint targetCoordinates;
/// the x,y coordinates of the middle of the horizontal side of the box
@property (assign) CGPoint widthCoordinates;
/// the x,y coordinates of the middle of the vertical side of the box
@property (assign) CGPoint heightCoordinates;

/// Creates the ARView. Note that lensheight to be input in meters
- (id) initWithFrame:(CGRect)frame lensHeight:(float) lensHeight;

/// Creates a still picture with a dynamic overlay of the measurements. In order to create the correct overlay, you need to
/// also input the lensHeight, acceleration values and measured dimensions. Accel is an array with NSNumbers, ordered as X,
/// Y, Z values. lensHeight, height, width and distance is in meters.
- (id) initDynPicWithFrame:(CGRect)frame image:(UIImage*)image lensHeight:(float) lensHeight acceleration:(NSArray*)accel distance:(float)distance height:(float)height width:(float)width;

- (void) updateLensHeight:(float)lensHeight;

/// The vertical opening angle (degrees) of the camera lens. Defaults to the device opening angle (all iDevices are available
/// in the library)
- (void) updateOpeningAngle:(float)angle;

/// Programmatically sets the screen location of the pointer in Dynamic Picture Mode (doesn't do anything when not in Dynamic Picture Mode). X and Y are between 0 and 1
- (void) setPointerScreenLocationX:(float)locX andY:(float)locY;

// Reset the opening angle to the default of the device
- (void) resetOpeningAngle;

/// Optionally set the height and width of the measurement box. Default is 1 x 1. Units are the same as the units used for the lensHeight
- (void) setHeight:(float)boxHeight andWidth:(float)boxWidth;

/// Optionally set the frame for the zoom box, showing a zoomed image of the target. Defaults to a box in the top left of the image
- (void) setZoomBoxFrame:(CGRect)frame;

/// Optionally set the number of pixels below the center of the image and the target. Can be used as an initial value, since the user can also control this by the target slider.
- (void) setTargetOffset:(float) pixels;

/// Set to TRUE for normal portrait orientation (default), and FALSE for upside down orientation
- (void) setARScreenOrientation:(BOOL) portraitOrientation;

/// Optionally set the image of the target (provide the file name and include the image in the bundle. NOTE: The center of the pic should align with the target center!
- (void) setTargetImageName:(NSString*) imageName;

/// Optionally set the image of the box mover (provide the file name and include the image in the bundle
- (void) setBoxImageName:(NSString*) imageName;

/// Optionally set the image of the bottom box mover [ONLY for DYNAMIC PICTURES] (provide the file name and include the image in the bundle)
- (void) setBottomBoxImageName:(NSString*) imageName;

/// Optionally set the image of the target mover (provide the file name and include the image in the bundle
- (void) setTargetMoverImageName:(NSString*) imageName;

/// Calibrate factor A and B in equation Z = calA*Z+calB (Z is the acceleration perpendicular to the iPhone screen plane (default = 1)
- (void) setCalibrationFactorA:(float)factorA andFactorB:(float)factorB;

/// Set the separation distance of the target mover relative to the target (default: 70,30)
- (void) setTargetMoverSeparation:(CGPoint)separation;

/// Set the separation distance of the box mover relative to the top right hand side of the box (default: 15,-15)
- (void) setBoxMoverSeparation:(CGPoint)separation;

/// Start the AR engine
- (void) startAR;

/// Stop the AR engine
- (void) stopAR;

/// Pauses the video feed
- (void) pauseVideoFeed;

/// Starts the video feed
- (void) startVideoFeed;

/// Shows the Zoom screen, and in-view screen that shows a 2x zoom of the target. Does not work with the dynamic pictures
- (void) showZoom;

/// Capture a screen shot of the AR view. When the UIImage is available, the delegate method finishedPictureProcessing is called
- (void) clickPicture
    __attribute__((deprecated("Use clickPictureWithOrientation.")));

/// Capture a screen shot of the AR view.The orientation defines the orientation of the picture. When the UIImage is available, the delegate method finishedPictureProcessing is called
- (void) clickPictureWithOrientation:(UIImageOrientation) orientation;

/// Toggles the grid in the ARView
- (void) toggleGrid;

/// Toggles the flashlight (if the device does not have a flashlight, and error popup is shown
- (void) toggleLight;

/// Toggles the height/width measurement box
- (void) toggleBox;

/// Returns version number of Library
- (NSString*) ARViewVersion;

/// Returns current Opening Angle used by ARView
- (float) currentOpeningAngle;

@end



