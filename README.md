# Save Data Security
This package is designed for managing data storage
and retrieval in Unity. It contains static methods
that provide functionality for saving, loading,
deleting, and editing data using various
encryption techniques.

## Static Methods:

1. `Exists(string key)`
- Checks if data with a specific key exists.
```csharp
if(SD.Exists("myKey"))
{
    Debug.Log("Data exists!");
}
