import {GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList, GraphQLID, GraphQLSchema, GraphQLNonNull} from 'graphql';
import {Artist} from '../models/Artist'
import {Song} from '../models/Song'


const SongType = new GraphQLObjectType({
  name: "Song",
  fields: () => ({
    id: {type: GraphQLID},
    name: {type: GraphQLString},
    genre: {type: GraphQLString},
    pace: {type: GraphQLInt},
    artist: {
      type: ArtistType,
      resolve(parent, args){
        return Artist.findById(parent.artistId)
      }
    },
  })
});

const ArtistType = new GraphQLObjectType({
  name: "Arist",
  fields: () => ({
    id: {type: GraphQLID},
    name: {type: GraphQLString},
    songs: {
      type: new GraphQLList(SongType),
      resolve(parent, args){
        return Song.find({artistId: parent.id})
      }
    },
  })
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    song: {
      type: SongType,
      args: {id: {type: GraphQLID}},
      resolve(parent, args){
        return Song.findById(args.id);
      }
    },
    songs: {
      type: new GraphQLList(SongType),
      resolve(parent, args){
        return Song.find({});
      }
    },
    artist: {
      type: ArtistType,
      args: {id: {type: GraphQLID}},
      resolve(parent, args){
        return Artist.findById(args.id);
      }
    },
    artists: {
      type: new GraphQLList(ArtistType),
      resolve(parent, args){
        return Artist.find({});
      }
    }
  }
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addSong: {
      type: SongType,
      args: {
        name: {type: new GraphQLNonNull(GraphQLString)},
        pace: {type: new GraphQLNonNull(GraphQLInt)},
        genre: {type: new GraphQLNonNull(GraphQLString)},
        artistId: {type: new GraphQLNonNull(GraphQLString)}
      },
      resolve(parent, args){
        let song = new Song({
          name: args.name,
          pace: args.pace,
          genre: args.genre,
          artistId: args.artistId,
        });
        return song.save();
      }
    },
    addArtist: {
      type: ArtistType,
      args: {
        name: {type: new GraphQLNonNull(GraphQLString)}
      },
      resolve(parent, args){
        let artist = new Artist({
          name: args.name
        });
        return artist.save();
      }
    }
  }
})

const mySchema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});

export default mySchema;