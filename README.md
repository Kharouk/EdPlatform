# World's best tutorial platform

> Learn everything, seriously.

![App preview](assets/preview.PNG)

## Improvements

Some things I would implement or improve if I had more time (which I wish I did as I enjoyed building this out).

1. Each Video tutorial would have it's own page, with more information about the tutorial such as description or comments
2. Engagement within the platform; creating accounts, favorite videos, comments, affecting the ratings
3. Better GRID layout and more engaging UI
4. Have the two search boxes work in unison so that you can search for a teacher name as well as get the tags of videos associated to that teacher
5. Search by multiple tags at a time.
6. Relationships:
   - Building a relational structure that matches videos to teacher IDs
   - having a teachers page that shows all the related videos to that teacher

I would also eject from using Expo so that I was dealing with essentially the native versions for both Android and IOS. I would then use a potential cloud storage to handle potential authentication features.

We would also migrate from using a base JSON file as the data structure to store all our video metadata as that would get far too big. I would use something like **AWS Amplify** to get us started as we are already in the ecosystem and can scale from there.
