//
//  ARViewDEMOAppDelegate.m
//  ARView DEMO
//
//  Copyright Caramba App Development 2009. All rights reserved.
//

#import "ARViewDEMOAppDelegate.h"
#import "MainViewController.h"

@implementation ARViewDEMOAppDelegate


@synthesize window;
@synthesize mainViewController;

- (void)applicationDidFinishLaunching:(UIApplication *)application {
    

    [[UIApplication sharedApplication] setStatusBarHidden:YES withAnimation:NO];
    
    
    MainViewController * aController = [[MainViewController alloc] initWithNibName:@"MainView" bundle:nil];
    
    self.mainViewController = aController;
	[aController release];
    
    mainViewController.view.frame = [UIScreen mainScreen].applicationFrame;
    window.rootViewController = mainViewController;
	[window makeKeyAndVisible];
	
    application.idleTimerDisabled = YES;
    
}

- (id) init {
    if ((self = [super init])) {
  
    } return self;
    
}


- (void)dealloc {
    [mainViewController release];
    [window release];
    [super dealloc];
}

@end
