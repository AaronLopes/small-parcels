//
//  ARViewDEMOAppDelegate.h
//  ARView DEMO
//
//  Copyright Caramba App Development 2009. All rights reserved.
//


#import <AVFoundation/AVFoundation.h>

@class MainViewController;


@interface ARViewDEMOAppDelegate : NSObject <UIApplicationDelegate> {
    UIWindow *window;
    MainViewController *mainViewController;
}

@property (nonatomic, retain) IBOutlet UIWindow *window;
@property (nonatomic, retain) MainViewController *mainViewController;

@end

