let
  pkgs = import <nixpkgs> {};
in
  with pkgs; (callPackage ./default.nix { nodejs=nodejs; })
