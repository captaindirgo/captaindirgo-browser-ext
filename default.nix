{ nodejs, python2, node2nix, stdenv }:
stdenv.mkDerivation {
  name = "gab-captaindirgo";

  buildInputs = [ nodejs python2 node2nix ];
}
  
