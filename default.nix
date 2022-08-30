{ nodejs, python2, node2nix, stdenv }:
stdenv.mkDerivation {
  name = "cptd-captaindirgo";

  buildInputs = [ nodejs python2 node2nix ];
}
  
