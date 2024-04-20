#!/bin/bash

# Command 1: Start Android emulator
~/Android/sdk/emulator/emulator -avd Pixel_3a_API_34_extension_level_7_x86_64 &

# Command 2: Start Expo development server for Android
npx expo start --android
