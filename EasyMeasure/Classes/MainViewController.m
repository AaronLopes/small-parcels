//
//  MainViewController.m
//  ARView DEMO
//
//  Copyright Caramba App Development 2009. All rights reserved.
//

#import "MainViewController.h"


@implementation MainViewController

 // Implement viewDidLoad to do additional setup after loading the view, typically from a nib.
 - (void)viewDidLoad {
     [super viewDidLoad];
     
     
     self.overlayImage = [[[UIImage alloc] init] retain];
     
     // SETUP THE DISTANCE LABEL
     distanceLabel = [[UILabel alloc] initWithFrame:CGRectMake(60, 214, 100, 35)];
     distanceLabel.font = [UIFont fontWithName:@"Helvetica-Bold" size:28];
     distanceLabel.textAlignment = UITextAlignmentCenter;
     distanceLabel.textColor = [UIColor whiteColor];
     distanceLabel.backgroundColor = [UIColor clearColor];
     distanceLabel.shadowOffset = CGSizeMake(0, -1);
     distanceLabel.shadowColor = [UIColor blackColor];
     [self.view addSubview:distanceLabel];
     
     // SETUP THE HEIGHT LABEL
     heightLabel = [[UILabel alloc] initWithFrame:CGRectMake(60, 214, 70, 20)];
     heightLabel.font = [UIFont fontWithName:@"Helvetica" size:14];
     heightLabel.textAlignment = UITextAlignmentCenter;
     heightLabel.textColor = [UIColor whiteColor];
     heightLabel.backgroundColor = [UIColor clearColor];
     heightLabel.shadowOffset = CGSizeMake(0, -1);
     heightLabel.shadowColor = [UIColor blackColor];
     [self.view addSubview:heightLabel];
     
     // SETUP THE WIDTH LABEL
     widthLabel = [[UILabel alloc] initWithFrame:CGRectMake(60, 214, 70, 20)];
     widthLabel.font = [UIFont fontWithName:@"Helvetica" size:14];
     widthLabel.textAlignment = UITextAlignmentCenter;
     widthLabel.textColor = [UIColor whiteColor];
     widthLabel.backgroundColor = [UIColor clearColor];
     widthLabel.shadowOffset = CGSizeMake(0, -1);
     widthLabel.shadowColor = [UIColor blackColor];
     [self.view addSubview:widthLabel];
     
     // set up the slider
     heightSet.value = 0.9f;
     float lensHeight = heightSet.value*2.0f+0.001f; // lensHeight in meters
     lensHeightLabel.text = [NSString stringWithFormat:@"%3.2f m",lensHeight];
     
     self.DynPic = FALSE; // set to TRUE to generate a dynamic picture instead of an Augmented Reality View
     
     if (self.DynPic) {
         // initiate the Dynamic Picture View, Hide some UI Elements that do not have a function in the Dyn Picture View
         heightSet.alpha = 0.0f;
         lensHeightLabel.alpha = 0.0f;
         flashButton.alpha = 0.0f;
         zoomButton.alpha = 0.0f;
         heightLabelText.alpha = 0.0f;
         NSArray* accel = [NSArray arrayWithObjects:[NSNumber numberWithFloat:0.002964f],[NSNumber numberWithFloat:-0.978574f],[NSNumber numberWithFloat:-0.205873f], nil];
         myARView = [[ARView alloc] initDynPicWithFrame:CGRectMake(0, 0, 320, 480) image:[UIImage imageNamed:@"example"] lensHeight:1.75f acceleration:accel distance:5.3f height:2.5f width:1.7f];
     }
     else {
         // initiate the AR view
         myARView = [[ARView alloc] initWithFrame:CGRectMake(0, 0, 320, 480) lensHeight:lensHeight];
         [myARView setHeight:0.5f andWidth:0.5]; // optionally set the initial height and width of the measurement box
     }
     
     NSLog(@"ARView version %@",[myARView ARViewVersion]);
     
     // show version of ARView
     NSLog(@"ARView Version: %@",[myARView ARViewVersion]);
     
     myARView.delegate = self;
     
     // assign the images for the controls
     [myARView setBoxImageName:@"movement.png"];
     [myARView setBottomBoxImageName:@"movement.png"];
     [myARView setTargetImageName:@"arrow_middle.png"];
     [myARView setTargetMoverImageName:@"updown.png"];
     
     [self.view insertSubview:myARView belowSubview:lensHeightLabel];
     
     [myARView startAR];
     
     
     // show used opening angle of ARView
     NSLog(@"%f",[myARView currentOpeningAngle]);
     
 }

// UI Methods
-(IBAction) showZoom: (id) sender {
    [myARView showZoom];
}

-(IBAction) toggleLight {
    [myARView toggleLight];
}

-(IBAction) toggleGrid {
    
    [myARView toggleGrid];
}

-(IBAction) toggleBox {
    [myARView toggleBox];
}

-(IBAction)clickPicture {
    // get the distance label and location for adding to the picture later
    UIGraphicsBeginImageContextWithOptions(distanceLabel.bounds.size, NO, 0.0);
    [distanceLabel.layer renderInContext:UIGraphicsGetCurrentContext()];
    self.overlayImage = UIGraphicsGetImageFromCurrentImageContext();
    UIGraphicsEndImageContext();
    
    [myARView clickPictureWithOrientation:UIImageOrientationUp];
}

-(IBAction)sliderHeightSet:(id)sender { // set height of iPhone
	UISlider *slider=(UISlider *) sender;
	float value = slider.value;
    float lensHeight = value*2.0f+0.001f;
    lensHeightLabel.text = [NSString stringWithFormat:@"%3.2f m",lensHeight];
    [myARView updateLensHeight:lensHeight];// vary the lens height in meters from 0 to 2 meters
}


// DELEGATE METHODS
-(void)finishedPictureProcessing:(UIImage*) processedImage {
    
    // overlay the captured labels to the background picture
    UIGraphicsBeginImageContext(processedImage.size);
    [processedImage drawInRect:CGRectMake(0, 0, processedImage.size.width, processedImage.size.height)];
    [self.overlayImage drawAtPoint:myARView.targetCoordinates];
    UIImage *result = UIGraphicsGetImageFromCurrentImageContext();
    UIGraphicsEndImageContext();
    
    // save the captured image to the photoalbum
    UIImageWriteToSavedPhotosAlbum(result, nil, nil, nil);
}

- (void) ARViewValuesUpdated {
    
    // update the distance label. The label turns with the screen
    distanceLabel.center = myARView.targetCoordinates;
    CGAffineTransform movement = CGAffineTransformMakeRotation(-myARView.tiltAngle);
    // reposition the distance label
    movement = CGAffineTransformTranslate(movement, 0, 25); // 25 pixels separation distance
    [distanceLabel setTransform:movement];
    distanceLabel.text = [NSString stringWithFormat:@"%3.2f m",myARView.groundDistance];
    
    // update the width label. The label turns with the screen
    widthLabel.center = myARView.widthCoordinates;
    movement = CGAffineTransformMakeRotation(-myARView.tiltAngle);
    // reposition the width label
    movement = CGAffineTransformTranslate(movement, 0, -25); // 25 pixels separation distance
    [widthLabel setTransform:movement];
    widthLabel.text = [NSString stringWithFormat:@"%3.2f m",myARView.width];
    
    // update the height label. The label turns with the screen
    heightLabel.center = myARView.heightCoordinates;
    movement = CGAffineTransformMakeRotation(-myARView.tiltAngle);
    // reposition the width label
    movement = CGAffineTransformTranslate(movement, 25, 0); // 25 pixels separation distance
    [heightLabel setTransform:movement];
    heightLabel.text = [NSString stringWithFormat:@"%3.2f m",myARView.height];
    
    // update the accuracy
    accuracyLabel.text = [NSString stringWithFormat:@"%3.2f m",myARView.accuracy];
    
    // get the acceleration values
    // float accelX = [[myARView.accel objectAtIndex:0] floatValue];
    // float accelY = [[myARView.accel objectAtIndex:1] floatValue];
    // float accelZ = [[myARView.accel objectAtIndex:2] floatValue];
    
}


// Rotation and memory methods
- (void)didReceiveMemoryWarning {
	// Releases the view if it doesn't have a superview.
 //   [super didReceiveMemoryWarning];
	
	// Release any cached data, images, etc that aren't in use.
}

- (void)viewDidUnload {
	// Release any retained subviews of the main view.
	// e.g. self.myOutlet = nil;
}
#if __IPHONE_OS_VERSION_MAX_ALLOWED < 90000
- (NSUInteger)supportedInterfaceOrientations {
    return UIInterfaceOrientationMaskPortrait | UIInterfaceOrientationMaskPortraitUpsideDown;
}
#else
- (UIInterfaceOrientationMask)supportedInterfaceOrientations {
    return UIInterfaceOrientationMaskPortrait | UIInterfaceOrientationMaskPortraitUpsideDown;
}
#endif


- (BOOL)shouldAutorotate {
    
    UIInterfaceOrientation orientation = [[UIDevice currentDevice] orientation];
    
    if (orientation == UIInterfaceOrientationPortrait){
        [myARView setARScreenOrientation:TRUE];
        return YES;
    }
    if (orientation == UIInterfaceOrientationPortraitUpsideDown){
        [myARView setARScreenOrientation:FALSE];
        return YES;
    }
    if (orientation == UIInterfaceOrientationLandscapeLeft)
        return NO;
    if (orientation == UIInterfaceOrientationLandscapeRight)
        return NO;
    return NO; // Unknown value
}

-(BOOL)shouldAutorotateToInterfaceOrientation:(UIInterfaceOrientation)toInterfaceOrientation {
    if (toInterfaceOrientation == UIInterfaceOrientationPortrait){
        [myARView setARScreenOrientation:TRUE];
        return YES;
    }
    if (toInterfaceOrientation == UIInterfaceOrientationPortraitUpsideDown){
        [myARView setARScreenOrientation:FALSE];
        return YES;
    }
    if (toInterfaceOrientation == UIInterfaceOrientationLandscapeLeft)
        return NO;
    if (toInterfaceOrientation == UIInterfaceOrientationLandscapeRight)
        return NO;
    return NO; // Unknown value
}

- (void)dealloc {
	[super dealloc];
}


@end
