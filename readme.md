
# Webno
Deno **typescript types** for browser applications.
Includes most of the ecmascript browser APIs, native functions and other useful types.

### Usage ✨

You should import the whole *mod.ts* as "side-effects only" file in your main file. Types from the file should be then accesible everywhere in project.

```typescript
import 'https://deno.land/x/webno/mod.ts';

// Here you can now use document, window etc.
```

### Disclaimer 🛑
These types may not be complete. All deprecated stuff is removed to keep things as small as possible. Feel free to post an issue or create pull request when you encounter a bug.
