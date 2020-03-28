import glob
import os
import PIL
from PIL import Image, ImageDraw  # , ImageFont
from ipywidgets import interact

bounding_box = (10, 118, 1163, 750)
cut = True


# Function that return a cropped image from the original and a box
def cutImg(PIL_image, bounding_box):
    return PIL_image.crop(bounding_box)


def makeDir(dirName):  # Function that create target directory & all intermediate directories if don't exists
    if not os.path.exists(dirName):
        os.makedirs(dirName)
        print("Directory ", dirName,  " Created ")
    else:
        print("Directory ", dirName,  " already exists")


makeDir('300')
makeDir('700')
size_300 = (300, 300)
size_700 = (700, 700)
ext = '.png'

for f in os.listdir('.'):  # For every file in the actual directory
    if f.endswith('{}'.format(ext)):  # If the file has the ext assigned image
        i = Image.open(f)  # Open the file as a PIL image object
        if cut:  # Cut the image if cut == True
            i = cutImg(i, bounding_box)

        fn, f_ext = os.path.splitext(f)
        # Make a thumbnail of 700px (alterate the i object)
        i.thumbnail(size_700)
        i.save('700/{}_700{}'.format(fn, f_ext))  # Save in the folder 700

        # Make a thumbnail of 300px (alterate the i object)
        i.thumbnail(size_300)
        i.save('300/{}_300{}'.format(fn, f_ext))  # Save in the folder 300
