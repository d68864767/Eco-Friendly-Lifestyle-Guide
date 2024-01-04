```swift
import SwiftUI

struct ContentView: View {
    @State private var contents: [Content] = []

    var body: some View {
        NavigationView {
            List(contents) { content in
                VStack(alignment: .leading) {
                    Text(content.title)
                        .font(.headline)
                    Text("Type: \(content.type)")
                    Text("Topic: \(content.topic)")
                    Text("Description: \(content.description)")
                    Link("Learn More", destination: URL(string: content.link)!)
                }
            }
            .navigationTitle("Eco-Friendly Content")
            .onAppear(perform: fetchContents)
        }
    }

    func fetchContents() {
        // Implement the API call to fetch contents
        // Update the contents state variable with the fetched contents
    }
}

struct Content: Identifiable {
    var id: String
    var title: String
    var type: String
    var topic: String
    var link: String
    var description: String
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
```
