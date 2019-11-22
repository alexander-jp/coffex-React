import 'package:equatable/equatable.dart';
import 'package:meta/meta.dart';

abstract class DdState extends Equatable {
  /// notify change state without deep clone state
  final int version;
  
  final Iterable propss;
  DdState(this.version,[this.propss]);

  /// Copy object for use in action
  /// if need use deep clone
  DdState getStateCopy();

  DdState getNewVersion();

  @override
  List<Object> get props => (propss);
}

/// UnInitialized
class UnDdState extends DdState {

  UnDdState(version) : super(version);

  @override
  String toString() => 'UnDdState';

  @override
  UnDdState getStateCopy() {
    return UnDdState(0);
  }

  @override
  UnDdState getNewVersion() {
    return UnDdState(version+1);
  }
}

/// Initialized
class InDdState extends DdState {
  final String hello;

  InDdState(version, this.hello) : super(version, [hello]);

  @override
  String toString() => 'InDdState $hello';

  @override
  InDdState getStateCopy() {
    return InDdState(this.version, this.hello);
  }

  @override
  InDdState getNewVersion() {
    return InDdState(version+1, this.hello);
  }
}

class ErrorDdState extends DdState {
  final String errorMessage;

  ErrorDdState(version, this.errorMessage): super(version, [errorMessage]);
  
  @override
  String toString() => 'ErrorDdState';

  @override
  ErrorDdState getStateCopy() {
    return ErrorDdState(this.version, this.errorMessage);
  }

  @override
  ErrorDdState getNewVersion() {
    return ErrorDdState(version+1, this.errorMessage);
  }
}
