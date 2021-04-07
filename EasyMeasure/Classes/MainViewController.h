//
//  MainViewController.h
//  ARView DEMO
//
//  Copyright Caramba App Development 2009. All rights reserved.
//

#import <UIKit/UIKit.h>
#import "ARView.h"

@interface MainViewController : UIViewController <UIAccelerometerDelegate,UIAlertViewDelegate,UIImagePickerControllerDelegate,UIPopoverControllerDelegate,ARViewDelegate> {

    ARView * myARView;
 	IBOutlet UILabel *lensHeightLabel;
 	IBOutlet UILabel *accuracyLabel;
	IBOutlet UISlider *heightSet;
 	UILabel *distanceLabel;
 	UILabel *heightLabel;
    UILabel *widthLabel;
    IBOutlet UIButton *flashButton;
    IBOutlet UIButton *captureButton;
    IBOutlet UIButton *zoomButton;
    IBOutlet UILabel *heightLabelText;
   
    
}

@property (nonatomic,retain) UIImage *overlayImage;
@property (assign) int unitHeight;
@property (assign) bool DynPic;


- (IBAction) showZoom: (id) sender;
- (IBAction)clickPicture;
- (IBAction)toggleGrid;
- (IBAction)toggleLight;
- (IBAction)toggleBox;
-(IBAction)sliderHeightSet:(id)sender;
@end
